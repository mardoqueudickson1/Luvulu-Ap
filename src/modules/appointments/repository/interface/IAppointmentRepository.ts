import { IFindAllInDayFromProvider } from '../../dtos/IFindAllInDayFromProvider.output';
import { IFindAllInMonthFromProvider } from '../../dtos/IFindAllInMonthFromProvider.output';
import { AppointmentType } from '../../dtos/appointment.types';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
import { Appointments } from '../../entities/appointments.entity';

export abstract class IAppointmentRepository {
  abstract create(data: CreateAppointInput): Promise<Appointments>;
  abstract findById(id: string): Promise<ResponseAllAppointPatient>;
  abstract findUser(id: string): Promise<AppointmentType>;
  abstract findAppoitmentByPatientId(
    id: string,
  ): Promise<ResponseAllAppointPatient[]>;
  abstract findAppoitmentByDoctorId(
    id: string,
  ): Promise<ResponseAllAppointPatient[]>;
  abstract findAppoitmentByclinicId(
    id: string,
  ): Promise<ResponseAllAppointPatient[]>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(): Promise<Appointments[]>;
  abstract findByDate(
    date: Date,
    doctorId: string,
  ): Promise<Appointments | undefined>;
  abstract update(
    id: string,
    doctor: UpdateAppointmentInput,
  ): Promise<Appointments>;

  abstract findAllInDayFromProvider(
    data: IFindAllInDayFromProvider,
  ): Promise<Appointments[]>;

  abstract findAllInMonthFromProvider(
    data: IFindAllInMonthFromProvider,
  ): Promise<Appointments[]>;
}
