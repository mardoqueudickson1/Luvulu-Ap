import { Injectable } from '@nestjs/common';
import * as googleMaps from '@google/maps';
import {
  ClinicOutput,
  NearByclinicResponse,
} from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class findClinicNearByService {
  constructor(private repo: IClinicRepository) {}

  async listNearbyClinics(
    pacientLatitude: number,
    pacientlongitude: number,
  ): Promise<ClinicOutput[]> {
    const maxDistance = 20000;
    const ClinicsNearBy: NearByclinicResponse[] = [];

    const googleMapsClient = googleMaps.createClient({
      key: process.env.GoogleMapsApiKey,
    });

    const clinics = await this.repo.findAll();

    await Promise.all(
      clinics.map(async (clinic) => {
        const latitudeNumber = parseFloat(clinic.clinicLatitude);
        const longitudeNumber = parseFloat(clinic.cliniclongitude);
        const distanceMatrixResponse = await this.calculateDistance(
          googleMapsClient,
          pacientLatitude,
          pacientlongitude,
          latitudeNumber,
          longitudeNumber,
        );

        if (
          distanceMatrixResponse &&
          distanceMatrixResponse.json &&
          distanceMatrixResponse.json.rows &&
          distanceMatrixResponse.json.rows.length > 0 &&
          distanceMatrixResponse.json.rows[0].elements &&
          distanceMatrixResponse.json.rows[0].elements.length > 0 &&
          distanceMatrixResponse.json.rows[0].elements[0].distance &&
          distanceMatrixResponse.json.rows[0].elements[0].distance.value &&
          distanceMatrixResponse.json.rows[0].elements[0].distance.text &&
          distanceMatrixResponse.json.rows[0].elements[0].duration.text
        ) {
          const distanceInMeters =
            distanceMatrixResponse.json.rows[0].elements[0].distance.value;
          const distanceInKm =
            distanceMatrixResponse.json.rows[0].elements[0].distance.text;
          const duration =
            distanceMatrixResponse.json.rows[0].elements[0].duration.text;

          if (distanceInMeters <= maxDistance) {
            const result = {
              ...clinic,
              distance: distanceInMeters,
              distanceInKm: distanceInKm,
              time: duration,
            };
            ClinicsNearBy.push(result);
            return result;
          }
        }
        return null;
      }),
    );

    ClinicsNearBy.sort((a, b) => a.distance - b.distance);

    const nearbyClinicsFiltered = ClinicsNearBy.filter(
      (clinic) => clinic !== null,
    );

    for (const data of nearbyClinicsFiltered) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }

    return nearbyClinicsFiltered;
  }

  private calculateDistance(
    client: {
      distanceMatrix: (
        arg0: { origins: string[]; destinations: any[]; mode: string },
        arg1: (err: any, response: any) => void,
      ) => void;
    },
    patientLatitude: number,
    patientLongitude: number,
    clinicLatitude: number,
    clinicLongitude: number,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      client.distanceMatrix(
        {
          origins: [`${patientLatitude},${patientLongitude}`],
          destinations: [`${clinicLatitude},${clinicLongitude}`],
          mode: 'driving',
        },
        (err: any, response: any) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        },
      );
    });
  }
}
