import { RoleType } from '@prisma/client';
import {
  CreateDoctorInput,
  CreateDoctorPartial,
} from '../../dtos/create-doctor.input';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailValidator } from '../../../../utils/shared/emailValidator';
import { messages } from '../../../../utils/shared/errorsMessages';
import {
  generateHash,
  generatePatientNumber,
  toUpperCase,
} from '../../../../utils/utils';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { readHTMLFile } from 'src/utils/shared/readHtml';
import { SendMailService } from 'src/utils/services/emailService';
import { sendSms } from 'src/utils/services/send-sms-service';
import { formatPhoneNumber } from 'src/utils/shared/formatNumber';

@Injectable()
export class CreateDoctorService {
  constructor(
    private readonly doctorRepo: IDoctorRepository,
    private userRepo: IUserRepository,
    private readonly emailService: SendMailService,
  ) {}

  async create(
    createDoctorInput: CreateDoctorInput,
    createPartial: CreateDoctorPartial,
  ) {
    try {
      if (!EmailValidator(createDoctorInput.email)) {
        throw new BadRequestException(messages.invalidEmail);
      }

      const existingUser = await this.doctorRepo.findByEmail(
        createDoctorInput.email,
      );

      if (existingUser) {
        throw new BadRequestException(messages.doctorFound);
      }

      const formattedPhoneNumber = formatPhoneNumber(createDoctorInput.phone);

      const user = await this.userRepo.create({
        name: toUpperCase(createDoctorInput.name),
        email: createDoctorInput.email,
        phone: createDoctorInput.phone,
        gender: toUpperCase(createDoctorInput.gender),
        password: await generateHash(createDoctorInput.password),
        birthday: createDoctorInput.birthday,
        FatherName: createDoctorInput.FatherName,
        MotherName: createDoctorInput.MotherName,
        nif: createDoctorInput.nif,
        nationality: createDoctorInput.nationality,
        city: toUpperCase(createDoctorInput.city),
        municipality: toUpperCase(createDoctorInput.city),
        neigbhod: toUpperCase(createDoctorInput.neigbhod),
        addressComplement: createDoctorInput.addressComplement,
        Role: RoleType.DOCTOR,
      });

      const { Institution } = await this.doctorRepo.findUser(
        createPartial.institutionId,
      );

      const doctor = await this.doctorRepo.create({
        userId: user.id,
        institutionId: Institution.id,
        specialty: toUpperCase(createPartial.specialty),
        registrationNumber: generatePatientNumber(),
        bio: createPartial.bio,
      });

      const name = user.name;
      const email = user.email;

      const html = await readHTMLFile(`./dist/assets/html/welcome.html`, {
        name,
        email,
      });

      await this.emailService.execute({
        to: user.email ?? '',
        html,
        subject: 'Bem-vindo à Luvulu',
      });

      const msg = `
        Olá ${user.name}!

        Bem-vindo à Luvulu, a sua solução completa para cuidados de saúde personalizados.

        Seu cadastro foi realizado com sucesso com o email ${user.email} e o número ${formattedPhoneNumber}.

        A partir de agora, você pode:

        - Agendar consultas: Marque consultas com médicos de confiança em minutos.
        - Gerenciar sua saúde: Acompanhe seu histórico de consultas, exames e receitas médicas.
        - Conectar com médicos especializados: Encontre especialistas em sua área de preocupação.
        - Receber atendimento de qualidade: Receba atendimento médico de qualidade no conforto de sua casa.

        Obrigado por escolher o Luvulo. Estamos ansiosos para acompanhá-lo em sua jornada de saúde.

        Atenciosamente,
        O Team Luvulu `;

      await sendSms(formattedPhoneNumber, msg);

      return doctor;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
