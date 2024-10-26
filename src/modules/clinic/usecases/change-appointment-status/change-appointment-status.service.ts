import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
import { format } from 'date-fns';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { IDoctorRepository } from 'src/modules/doctor/repository/interface/IDoctorRepository';
import { sendSms } from 'src/utils/services/send-sms-service';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class ClinicChangeAppointmentStatusService {
  constructor(
    private readonly repo: IClinicRepository,
    private readonly notificationRepo: INotificationRepository,
    private readonly appoitmantRepo: IAppointmentRepository,
    private readonly doctorRepo: IDoctorRepository,
    private readonly clinicRepo: IClinicRepository,
  ) {}

  async changeStatus(
    appointmantId: string,
    status: AppointmentStatus,
  ): Promise<Appointments> {
    try {
      const appointment = await this.repo.changeAppointmentStatus(
        appointmantId,
        status,
      );

      const getAppointment = await this.appoitmantRepo.findById(appointmantId);
      // const clinic = await this.clinicRepo.findById(
      //   getAppointment.institutionId,
      // );
      const institionName = getAppointment.institution.user.name;

      if (status === 'CANCELED') {
        const canceledNotify = await this.notificationRepo.create({
          patient_id: getAppointment.pacient.id,
          content: `Olá ${getAppointment.pacient.name} o seu agendamento na ${institionName} foi cancelado!`,
          read: false,
        });

        const patientNumber = getAppointment.pacient.phone;
        await sendSms(patientNumber, canceledNotify.content);
      }

      if (status === 'CONFIRMED') {
        const dateFormatted = format(
          getAppointment.date,
          "dd/MM/yyyy 'às' HH:mm'h'",
        );

        // const confirmNotify = await this.notificationRepo.create({
        //   patient_id: getAppointment.pacient.id,
        //   content: `Olá ${getAppointment.pacient.name} o seu agendamento na ${institionName} foi confirmado!`,
        //   read: false,
        // });

        // console.log('confirmação', confirmNotify);

        // const NumberPatient = getAppointment.pacient.phone;
        // console.log('NumberPatient', NumberPatient);

        // await sendSms(NumberPatient, confirmNotify.content);

        // clinic

        const instituionName = getAppointment.institution.user.name;
        const notify = await this.notificationRepo.create({
          doctor_id: getAppointment.doctor.id,
          content: `Olá! Um novo agendamento foi marcado  na ${instituionName} para o dia ${dateFormatted}. 
          O paciente descreveu os seguintes sintomas: "${getAppointment.symptomDescription}". Este agendamento foi marcado por ${getAppointment.pacient.name}.`,
          read: false,
        });

        const doctorPhone = getAppointment.doctor.user.phone;

        await sendSms(doctorPhone, notify.content);
      }

      return appointment;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }
}
