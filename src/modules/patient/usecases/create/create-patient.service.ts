import { CreatePatientInput } from '../../dtos/create-patient.input';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { RoleType } from '@prisma/client';
import { GetUserInfoByBI } from '../../../../utils/getUserInfoByBi';
import { EmailValidator } from '../../../../utils/shared/emailValidator';
import { messages } from '../../../../utils/shared/errorsMessages';
import { generateHash, generatePatientNumber } from '../../../../utils/utils';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { sendSms } from 'src/utils/services/send-sms-service';
import { formatPhoneNumber } from 'src/utils/shared/formatNumber';
import { SendMailService } from 'src/utils/services/emailService';
import * as qr from 'qrcode';

import { readHTMLFile } from 'src/utils/shared/readHtml';
import { IQRCodeRepository } from 'src/modules/qr-code/repository/interface/IQRCodeRepository';
import { CreateQrcodeInput } from 'src/modules/qr-code/dtos/create-qrCode';

@Injectable()
export class CreatePatientService {
  constructor(
    private readonly patientRepo: IPatientRepository,
    private userRepo: IUserRepository,
    private readonly emailService: SendMailService,
    private QrCodeRepo: IQRCodeRepository,
  ) {}

  async create(createPatientInput: CreatePatientInput) {
    try {
      if (!EmailValidator(createPatientInput.email)) {
        throw new BadRequestException(messages.invalidEmail);
      }

      const existingUser = await this.patientRepo.findByEmail(
        createPatientInput.email,
      );

      if (existingUser) {
        throw new BadRequestException(messages.patientFound);
      }

      let userBilheteData = null;
      if (createPatientInput.BI) {
        userBilheteData = await GetUserInfoByBI(createPatientInput.BI);
      }
      // CloudinaryService

      const formattedPhoneNumber = formatPhoneNumber(createPatientInput.phone);
      const user = await this.userRepo.create({
        name: userBilheteData
          ? userBilheteData.CompleteName
          : createPatientInput.name,
        email: createPatientInput.email,
        phone: formattedPhoneNumber,

        Role: RoleType.PATIENT,
        gender: userBilheteData
          ? userBilheteData.Birth.gender
          : createPatientInput.gender,
        password: await generateHash(createPatientInput.password),
        BI: createPatientInput.BI || null,
        birthday: userBilheteData
          ? new Date(userBilheteData.Birth.birthDate)
          : new Date(createPatientInput.birthday),
        FatherName: userBilheteData
          ? userBilheteData.Fathers.FatherName
          : createPatientInput.FatherName,
        MotherName: userBilheteData
          ? userBilheteData.Fathers.MotherName
          : createPatientInput.MotherName,
        nif: userBilheteData ? userBilheteData.NIF : createPatientInput.nif,
        nationality: createPatientInput.nationality,
        city: createPatientInput.city,
        municipality: createPatientInput.municipality,
        neigbhod: createPatientInput.neigbhod,
        addressComplement: createPatientInput.addressComplement,
      });

      const patient = await this.patientRepo.create({
        userId: user.id,
        number: generatePatientNumber(),
      });

      const qrData = JSON.stringify({
        id: patient.id,
        nome: user.name,
        telefone: user.phone,
        Nome_do_Pai: user.FatherName,
        Nome_da_Mae: user.MotherName,
        genero: user.gender,
        Complemento_de_Endereco: user.addressComplement,
        BI: user.BI,
        numero_do_pacinete: patient.number,
        Role: user.Role,
      });

      const qrCodeImage: string = await qr.toDataURL(qrData);

      const qrCodeData: CreateQrcodeInput = {
        patientId: patient.id,
        code: qrCodeImage,
      };

      const qrCode = await this.QrCodeRepo.create(qrCodeData);
      console.log(qrCode.id);

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
      

        Obrigado por escolher o Luvulo. Estamos ansiosos para acompanhá-lo em sua jornada de saúde.

        Atenciosamente,
        O Team Luvulu
`;

      await sendSms(formattedPhoneNumber, msg);

      return patient;
    } catch (error) {
      throw error;
    }
  }
}
