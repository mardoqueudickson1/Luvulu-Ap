import { ClinicOutput } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
export declare class findClinicNearByService {
    private repo;
    constructor(repo: IClinicRepository);
    listNearbyClinics(pacientLatitude: number, pacientlongitude: number): Promise<ClinicOutput[]>;
    private calculateDistance;
}
