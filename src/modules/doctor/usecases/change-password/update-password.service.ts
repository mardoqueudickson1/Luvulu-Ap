import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword, generateHash } from 'src/utils/utils';
import { messages } from 'src/utils/shared/errorsMessages';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { changeDoctorPasswordInput } from '../../dtos/change-password';
import { Doctors } from '../../entities/doctor.entity';

@Injectable()
export class UpdateDoctorPasswordService {
  constructor(private readonly repo: IDoctorRepository) {}

  async update(data: changeDoctorPasswordInput): Promise<Doctors> {
    const doctor = await this.repo.findById(data.doctorId);

    if (!doctor) {
      throw new UnauthorizedException(messages.doctorNotFound);
    }

    const doctorPassword = doctor.user.password;
    const isOldPasswordValid = comparePassword(
      data.oldPassword,
      doctorPassword,
    );

    if (!isOldPasswordValid) {
      throw new UnauthorizedException(messages.passwordInvalid);
    }

    const newPasswordHash = await generateHash(data.newPassword);

    return await this.repo.updatePassword({
      doctorId: data.doctorId,
      oldPassword: doctorPassword,
      newPassword: newPasswordHash,
    });
  }

  async getDoctorId(userId: string) {
    const doctorId = await this.repo.findUser(userId);
    return doctorId;
  }
}
