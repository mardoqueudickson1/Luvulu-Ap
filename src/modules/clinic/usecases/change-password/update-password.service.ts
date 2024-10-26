import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword, generateHash } from 'src/utils/utils';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { Clinics } from '../../entities/clinic';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class UpdateClinicPasswordService {
  constructor(private readonly repo: IClinicRepository) {}

  async update(data: ClinicUpdatePasswordInput): Promise<Clinics> {
    const clinic = await this.repo.findById(data.clinicId);

    if (!clinic) {
      throw new UnauthorizedException(messages.clinicNotFound);
    }

    const clinicPassword = clinic.user.password;
    console.log('palavra passe antiga', clinicPassword);

    const isOldPasswordValid = comparePassword(
      data.oldPassword,
      clinicPassword,
    );

    if (!isOldPasswordValid) {
      throw new UnauthorizedException(messages.passwordInvalid);
    }

    const newPasswordHash = await generateHash(data.newPassword);

    return await this.repo.updatePassword({
      clinicId: data.clinicId,
      oldPassword: clinicPassword,
      newPassword: newPasswordHash,
    });
  }

  async getClinicID(clinicId: string) {
    const clinic = await this.repo.findUserClinicId(clinicId);
    return clinic;
  }
}
