// import { Resolver, Mutation, Args } from '@nestjs/graphql';
// import { UseGuards, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { GraphQLUpload } from 'graphql-upload-ts';
// import { UpdatePatientAvatarService } from '../../usecases/updateAvatar/update-patient-avatar.service';
// import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
// import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
// import { Patients } from '../../entities/patient.entity';
// import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';

// @Resolver('Patients')
// export class UpdateAvatarPatientResolver {
//   constructor(
//     private readonly updatePatientAvatarService: UpdatePatientAvatarService,
//   ) {}

//   @UseGuards(GqlAuthGuard)
//   @Mutation(() => Patients)
//   @UseInterceptors(FileInterceptor('patientAvatar'))
//   async updatePatientAvatar(
//     @Args('patientAvatar', { type: () => GraphQLUpload }) file: FileDTO,
//     @CurrentUser() user: any,
//   ): Promise<Patients> {
//     const patientIdLogged = await this.updatePatientAvatarService.getPatientID(
//       user.id,
//     );
//     const patientId = patientIdLogged.patient.id;
//     return this.updatePatientAvatarService.execute(patientId, file);
//   }
// }
