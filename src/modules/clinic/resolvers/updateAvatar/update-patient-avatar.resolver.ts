import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GraphQLUpload } from 'graphql-upload-ts';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UpdatePatientAvatarService } from 'src/modules/patient/usecases/updateAvatar/update-patient-avatar.service';
import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';
import { Patients } from 'src/modules/patient/entities/patient.entity';

@Resolver('Patients')
export class UpdateAvatarPatientResolver {
  constructor(
    private readonly updatePatientAvatarService: UpdatePatientAvatarService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Patients)
  @UseInterceptors(FileInterceptor('userAvatar')) // 'userAvatar' deve corresponder ao nome no Args
  async updatePatientAvatar(
    @Args('userAvatar', { type: () => GraphQLUpload }) file: FileDTO,
    @CurrentUser() user: any,
  ): Promise<Patients> {
    const patientIdLogged = await this.updatePatientAvatarService.getPatientID(
      user.id,
    );
    const patientId = patientIdLogged.patient.id;
    return this.updatePatientAvatarService.execute(patientId, file);
  }
}
