import { ICity, IDoctor, ISpecialty } from '../types/types';

function compareDoctorsParams(cities: ICity[], specialties: ISpecialty[], doctors: IDoctor[]) {
  return doctors.map((doctor) => {
    const specialty = specialties.find((specialty) => specialty.id === doctor.specialityId);
    const city = cities.find((city) => city.id === doctor.cityId);

    return {
      id: doctor.id,
      name: doctor.name,
      surname: doctor.surname,
      specialty: (specialty && specialty.name) || '',
      city: (city && city.name) || '',
      isPediatrician: doctor.isPediatrician,
      params: specialty?.params,
    };
  });
}

export default compareDoctorsParams;
