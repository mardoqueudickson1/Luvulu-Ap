"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const auth_module_1 = require("../auth/auth.module");
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const listAll_doctor_resolver_1 = require("./resolvers/listAll/listAll-doctor.resolver");
const remove_doctor_resolver_1 = require("./resolvers/remove/remove-doctor.resolver");
const create_doctor_service_1 = require("./usecases/create/create-doctor.service");
const findOne_doctor_service_1 = require("./usecases/findOne/findOne-doctor.service");
const listaAll_doctor_service_1 = require("./usecases/listAll/listaAll-doctor.service");
const remove_doctor_service_1 = require("./usecases/remove/remove-doctor.service");
const IDoctorRepository_1 = require("./repository/interface/IDoctorRepository");
const prismaDoctorRepository_1 = require("./repository/implementations/prismaDoctorRepository");
const create_doctor_resolver_1 = require("./resolvers/create/create-doctor.resolver");
const findOne_doctor_resolver_1 = require("./resolvers/findOne/findOne-doctor.resolver");
const perfil_doctor_service_1 = require("./usecases/perfil/perfil-doctor.service");
const user_module_1 = require("../user/user.module");
const perfil_doctor_resolver_1 = require("./resolvers/perfil/perfil-doctor.resolver");
const update_doctor_resolver_1 = require("./resolvers/update/update-doctor.resolver");
const get_schedule_service_1 = require("./usecases/getSchedule/get-schedule.service");
const get_schedule_resolver_1 = require("./resolvers/getSchedule/get-schedule.resolver");
const list_All_by_clinicID_service_1 = require("./usecases/list-All-by-clinicID/list-All-by-clinicID.service");
const list_all_by_ClinicID_resolver_1 = require("./resolvers/list-All-by-clinicID/list-all-by-ClinicID.resolver");
const associate_doctor_resolver_1 = require("./resolvers/associate-doctor/associate-doctor.resolver");
const associate_doctor_service_1 = require("./usecases/associate-doctor/associate-doctor.service");
const prismaClinicRepository_1 = require("../clinic/repository/implementations/prismaClinicRepository");
const IClinicRepository_1 = require("../clinic/repository/interface/IClinicRepository");
const change_appointmant_status_resolver_1 = require("./resolvers/changeAppointmantStatus/change-appointmant-status.resolver");
const change_appointment_status_service_1 = require("./usecases/change-appointment-status/change-appointment-status.service");
const prismaNotificationRepository_1 = require("../notification/repository/implementations/prismaNotificationRepository");
const INotificaionRepository_1 = require("../notification/repository/interface/INotificaionRepository");
const IAppointmentRepository_1 = require("../appointments/repository/interface/IAppointmentRepository");
const prismaAppointmentRepository_1 = require("../appointments/repository/implementations/prismaAppointmentRepository");
const list_all_clinic_OfDoctor_service_1 = require("./usecases/findClinicOfDoctor/list-all-clinic-OfDoctor.service");
const list_all_clinic_OfDoctor_resolver_1 = require("./resolvers/findClinicOfDoctor/list-all-clinic-OfDoctor.resolver");
const emailService_1 = require("../../utils/services/emailService");
const filter_doctor_resolver_1 = require("./resolvers/filter/filter-doctor.resolver");
const filter_doctor_service_1 = require("./usecases/filter/filter-doctor.service");
const search_doctor_service_1 = require("./usecases/searchDoctor/search-doctor.service");
const search_doctor_resolver_1 = require("./resolvers/searchDoctor/search-doctor.resolver");
const doctor_pacient_appoint_resolver_1 = require("./resolvers/DoctoPatientsAppoint/doctor-pacient-appoint.resolver");
const doctor_pacient_appoint_service_1 = require("./usecases/DoctoPatientsAppoint/doctor-pacient-appoint.service");
const desasociate_doctor_resolver_1 = require("./resolvers/desasociate-doctor/desasociate-doctor.resolver");
const desasociate_doctor_service_1 = require("./usecases/desasociate-doctor/desasociate-doctor.service");
const update_password_resolver_1 = require("./resolvers/change-password/update-password.resolver");
const update_password_service_1 = require("./usecases/change-password/update-password.service");
const update_doctor_service_1 = require("./usecases/update/update-doctor.service");
let DoctorModule = class DoctorModule {
};
exports.DoctorModule = DoctorModule;
exports.DoctorModule = DoctorModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, user_module_1.UserModule],
        providers: [
            listaAll_doctor_service_1.ListAllDoctorService,
            findOne_doctor_service_1.FindOneDoctorService,
            remove_doctor_service_1.RemoveDoctorService,
            create_doctor_service_1.CreateDoctorService,
            perfil_doctor_service_1.ProfileDoctorService,
            update_doctor_service_1.UpdateDoctorService,
            get_schedule_service_1.GetScheduleDoctorByIdService,
            list_All_by_clinicID_service_1.ListAllDoctorByclinicIDService,
            associate_doctor_service_1.AssociateDoctorService,
            change_appointment_status_service_1.ChangeAppointmentStatusService,
            list_all_clinic_OfDoctor_service_1.listClinicOfDoctorService,
            emailService_1.SendMailService,
            filter_doctor_service_1.FilterDoctorService,
            search_doctor_service_1.SearchDoctorService,
            doctor_pacient_appoint_service_1.getDoctorAppointmentsPatientsService,
            desasociate_doctor_service_1.DesasociateDoctorService,
            update_password_service_1.UpdateDoctorPasswordService,
            create_doctor_resolver_1.CreateDoctorResolver,
            findOne_doctor_resolver_1.FindOneDoctorResolver,
            remove_doctor_resolver_1.RemoveDoctorResolver,
            listAll_doctor_resolver_1.ListAlldoctorResolver,
            perfil_doctor_resolver_1.ProfiledoctorResolver,
            update_doctor_resolver_1.UpdateDoctorResolver,
            associate_doctor_resolver_1.AssociateDoctorResolver,
            change_appointmant_status_resolver_1.ChangeAppointmantStatusResolver,
            get_schedule_resolver_1.GetScheduuleDoctorByIdResolver,
            list_all_by_ClinicID_resolver_1.ListAllDoctorByclinicIDResolver,
            list_all_clinic_OfDoctor_resolver_1.listClinicOfDoctorResolver,
            filter_doctor_resolver_1.FilterDoctorResolver,
            search_doctor_resolver_1.SearchDoctorResolver,
            doctor_pacient_appoint_resolver_1.getDoctorAppointmentsPatientsResolver,
            desasociate_doctor_resolver_1.DesasociateDoctorResolver,
            update_password_resolver_1.UpdateDoctorPasswordResolver,
            {
                provide: IDoctorRepository_1.IDoctorRepository,
                useClass: prismaDoctorRepository_1.PrismaDoctorRepositoy,
            },
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
            {
                provide: IClinicRepository_1.IClinicRepository,
                useClass: prismaClinicRepository_1.PrismaClinicRepositoy,
            },
            {
                provide: INotificaionRepository_1.INotificationRepository,
                useClass: prismaNotificationRepository_1.PrismaNotificationsRepositoy,
            },
            {
                provide: IAppointmentRepository_1.IAppointmentRepository,
                useClass: prismaAppointmentRepository_1.PrismaAppointmentRepositoy,
            },
        ],
        exports: [],
    })
], DoctorModule);
//# sourceMappingURL=doctor.module.js.map