import { IComparedDoctorParams } from '../types/types';

const createOptions = (
  availableDoctors: IComparedDoctorParams[],
  cities: string[],
  specialties: string[]
) => {
  const filteredCitiesOptions = cities.map((city, index) => ({
    id: String(index),
    value: city,
  }));

  const filteredSpecialtiesOptions = specialties.map((specialty, index) => ({
    id: String(index),
    value: specialty,
  }));

  const filteredDoctorsOptions = availableDoctors.map((doctor) => ({
    id: doctor.id,
    value: `${doctor.name} ${doctor.surname}`,
  }));

  return { filteredCitiesOptions, filteredSpecialtiesOptions, filteredDoctorsOptions };
};

export default createOptions;
