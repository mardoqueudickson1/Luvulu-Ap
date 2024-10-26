import { findClinicNearByService } from '../../usecases/findClinicNearBy/find-clinic-nearBy.service';
export declare class FindClinicNearByResolver {
    private readonly repo;
    constructor(repo: findClinicNearByService);
    findClinicNearBy(pacientLatitude: number, pacientlongitude: number): Promise<import("../../dtos/findAll-clinic.output").ClinicOutput[]>;
}
