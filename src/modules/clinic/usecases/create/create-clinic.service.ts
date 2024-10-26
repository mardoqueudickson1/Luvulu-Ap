import { CreateClinicInput } from '../../dtos/create-clinic.input';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { RoleType } from '@prisma/client';
import { EmailValidator } from '../../../../utils/shared/emailValidator';
import { messages } from '../../../../utils/shared/errorsMessages';
import { generateHash } from '../../../../utils/utils';
import { formatPhoneNumber } from 'src/utils/shared/formatNumber';
import { sendSms } from 'src/utils/services/send-sms-service';
import { readHTMLFile } from 'src/utils/shared/readHtml';
import { SendMailService } from 'src/utils/services/emailService';

@Injectable()
export class CreateClinicService {
  constructor(
    private readonly clinicRepo: IClinicRepository,
    private userRepo: IUserRepository,
    private readonly emailService: SendMailService,
  ) {}

  async create(createClinicDTO: CreateClinicInput) {
    try {
      if (!EmailValidator(createClinicDTO.email)) {
        throw new BadRequestException(messages.invalidEmail);
      }

      const existingClinic = await this.clinicRepo.findByEmail(
        createClinicDTO.email,
      );

      if (existingClinic) {
        throw new BadRequestException(messages.clinicAlreadyExist);
      }

      const formattedPhoneNumber = formatPhoneNumber(createClinicDTO.phone);
      const nameUpperCase = createClinicDTO.name.toUpperCase();
      const municipalityUpperCase = createClinicDTO.municipality.toUpperCase();
      const cityUpperCase = createClinicDTO.city.toUpperCase();
      const neigbhodUpperCase = createClinicDTO.neigbhod.toUpperCase();

      const user = await this.userRepo.create({
        name: nameUpperCase,
        email: createClinicDTO.email,
        phone: createClinicDTO.phone,
        Role: RoleType.CLINIC,
        gender: createClinicDTO.gender,
        password: await generateHash(createClinicDTO.password),
        BI: createClinicDTO.BI,
        birthday: createClinicDTO.birthday,
        nif: createClinicDTO.nif,
        nationality: createClinicDTO.nationality,
        city: cityUpperCase,
        municipality: municipalityUpperCase,
        neigbhod: neigbhodUpperCase,
        addressComplement: createClinicDTO.addressComplement,
        type: createClinicDTO.type,
      });

      const latitudeString = createClinicDTO.clinicLatitude.toString();
      const longitudeString = createClinicDTO.cliniclongitude.toString();

      const clinic = await this.clinicRepo.create({
        userId: user.id,
        clinicLatitude: latitudeString,
        cliniclongitude: longitudeString,
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

        Agendar consultas: Marque consultas com médicos de confiança em minutos.
        Gerenciar sua saúde: Acompanhe seu histórico de consultas, exames e receitas médicas.
        Conectar com médicos especializados: Encontre especialistas em sua área de preocupação.
        eReceber atendimento de qualidade: Receba atendimento médico de qualidade no conforto de sua casa.

        Obrigado por escolher o Luvulo. Estamos ansiosos para acompanhá-lo em sua jornada de saúde.

        Atenciosamente,
        O Team Luvulu `;

      await sendSms(formattedPhoneNumber, msg);

      return clinic;
    } catch (error) {
      throw error;
    }
  }
}
