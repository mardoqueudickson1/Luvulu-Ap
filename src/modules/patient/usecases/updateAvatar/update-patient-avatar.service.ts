import { Injectable, NotFoundException } from '@nestjs/common';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { messages } from 'src/utils/shared/errorsMessages';
import { Patients } from '../../entities/patient.entity';
import { IStorageProvider } from 'src/utils/shared/providers/storageProviders/interfaces/IstorageProvider';
import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';

@Injectable()
export class UpdatePatientAvatarService {
  constructor(
    private readonly patientRepo: IPatientRepository,
    private readonly storageProviderRepo: IStorageProvider,
  ) {}

  async execute(patientId: string, data: FileDTO): Promise<Patients> {
    const patient = await this.patientRepo.findById(patientId);

    if (!patient) {
      throw new NotFoundException(messages.onlyAuthUser);
    }

    if (patient.user.avatar) {
      await this.storageProviderRepo.deleteFile(data);
    }

    const fileName = await this.storageProviderRepo.saveFile(data);

    patient.user.avatar = fileName.path;

    const updatedPatient = await this.patientRepo.update(patient);

    if (!updatedPatient) {
      throw new NotFoundException('Paciente não encontrado após a atualização');
    }

    // await this.patientRepo.update(patient);

    return updatedPatient;
  }

  async getPatientID(patientId: string) {
    const patient = await this.patientRepo.findPatientByUserId(patientId);
    return patient;
  }
}
