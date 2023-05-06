import { ICity, IDoctor, ISpecialty, IComparedDoctorParams } from '../types/types';

function compareDoctorsParams(cities: ICity[], specialties: ISpecialty[], doctors: IDoctor[]) {
  const comparedDoctorsArr: IComparedDoctorParams[] = doctors.map((doctor) => {
    return {
      id: doctor.id,
      name: doctor.name,
      surname: doctor.surname,
      specialty: specialties.find((specialty) => specialty.id === doctor.specialityId)?.name || '',
      city: cities.find((city) => city.id === doctor.cityId)?.name || '',
      isPediatrician: doctor.isPediatrician,
      params: specialties.find((specialty) => specialty.id === doctor.specialityId)?.params,
    };
  });
  return comparedDoctorsArr;
}

export default compareDoctorsParams;
