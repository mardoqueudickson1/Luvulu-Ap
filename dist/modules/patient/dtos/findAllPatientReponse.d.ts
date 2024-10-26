declare class User {
    name: string;
    email: string;
    nationality: string;
    Role: string;
    phone: string;
    birthday: Date;
    gender: string;
    neigbhod: string;
    city: string;
    nif: string;
    FatherName: string;
    MotherName: string;
    type: string;
    municipality: string;
    addressComplement: string;
}
export declare class FindAllPatientResponse {
    id: string;
    number: number;
    user: User;
}
export {};
