import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { changePasswordInput } from '../../dtos/change-password';
import { Patients } from '../../entities/patient.entity';
import { comparePassword, generateHash } from 'src/utils/utils';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class UpdatePasswordService {
  constructor(private readonly repo: IPatientRepository) {}

  async update(data: changePasswordInput): Promise<Patients> {
    const patient = await this.repo.findById(data.patientId);

    if (!patient) {
      throw new UnauthorizedException(messages.patientNotFound);
    }

    const patientPassword = patient.user.password;

    const isOldPasswordValid = comparePassword(
      data.oldPassword,
      patientPassword,
    );

    if (!isOldPasswordValid) {
      throw new UnauthorizedException(messages.passwordInvalid);
    }

    const newPasswordHash = await generateHash(data.newPassword);

    return await this.repo.updatePassword({
      patientId: data.patientId,
      oldPassword: patientPassword,
      newPassword: newPasswordHash,
    });
  }

  async getPatientID(patientId: string) {
    const patient = await this.repo.findPatientByUserId(patientId);
    return patient;
  }
}
