import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
import { BadRequestException, Injectable } from '@nestjs/common';
import { isBefore, format, startOfHour } from 'date-fns';
import { IWeeklyScheduleRepository } from 'src/modules/weeklySchedule/repository/interface/IWeeklyScheduleRepository';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { messages } from 'src/utils/shared/errorsMessages';
import { IMedicalHistoryRepository } from 'src/modules/MedicalHistory/repository/interface/IMedicalHistoryRepository';
import { AppointmentStatus, TypeNotification } from '@prisma/client';
import { sendSms } from 'src/utils/services/send-sms-service';
import { IClinicRepository } from 'src/modules/clinic/repository/interface/IClinicRepository';
import { IPatientRepository } from 'src/modules/patient/repository/interface/IPatientRepository';
import { Appointments } from '../../entities/appointments.entity';

@Injectable()
export class CreateAppointmentService {
  constructor(
    private readonly appointmentRepo: IAppointmentRepository,
    private readonly weeklyScheduleRepo: IWeeklyScheduleRepository,
    private readonly notificationRepo: INotificationRepository,
    private readonly medicalRepoHistory: IMedicalHistoryRepository,
    private readonly institutionRepo: IClinicRepository,
    private readonly patientRepo: IPatientRepository,
  ) {}

  async create(appointInput: CreateAppointInput): Promise<Appointments> {
    try {
      const appointmentDate = startOfHour(appointInput.date);

      if (isBefore(appointmentDate, Date.now())) {
        throw new BadRequestException(
          'Você não pode criar um compromisso em uma data anterior',
        );
      }

      if (appointInput.patientId === appointInput.doctorId) {
        throw new BadRequestException(
          'Você não pode criar um Agendamento consigo mesmo',
        );
      }

      const existingAppointment = await this.appointmentRepo.findByDate(
        appointInput.date,
        appointInput.doctorId,
      );
      if (existingAppointment) {
        throw new BadRequestException(
          'Este horário já está agendado para outro paciente',
        );
      }

      const { appointment } = await this.appointmentRepo.findUser(
        appointInput.patientId,
      );

      if (!appointment.id) {
        throw new BadRequestException(messages.patientNotFound);
      }

      const createdAppointment = await this.appointmentRepo.create({
        consultationTypeId: appointInput.consultationTypeId,
        doctorId: appointInput.doctorId,
        institutionId: appointInput.institutionId,
        patientId: appointment.id,
        isUrgent: appointInput.isUrgent,
        symptomDescription: appointInput.symptomDescription,
        date: appointInput.date,
        status: AppointmentStatus.PENDING,
      });

      await this.medicalRepoHistory.create({
        appointmentId: createdAppointment.id,
      });

      const patient = await this.patientRepo.findById(
        createdAppointment.patientId,
      );
      const institutions = await this.institutionRepo.findById(
        appointInput.institutionId,
      );

      const dateFormatted = format(appointmentDate, "dd/MM/yyyy 'às' HH:mm'h'");
      const notify = await this.notificationRepo.create({
        institution_id: createdAppointment.institutionId,
        type: TypeNotification.APPOINTMENT,
        content: `Olá! Um novo agendamento foi marcado na ${institutions.user.name} para o dia ${dateFormatted}. 
        O paciente descreveu os seguintes sintomas: "${appointInput.symptomDescription}". Este agendamento foi marcado por ${patient.user.name}.`,
        read: false,
      });

      const institutionNumber = institutions.user.phone;
      const notificationMessage = notify.content;

      await sendSms(institutionNumber, notificationMessage);

      return createdAppointment;
    } catch (error) {
      throw error;
    }
  }
}
