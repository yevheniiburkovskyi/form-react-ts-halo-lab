import { IRegister } from '../types/types';
import { IComparedDoctorParams } from '../types/types';

class Filter {
  doctors: IComparedDoctorParams[];
  cities: string[];
  specialties: string[];
  values: IRegister;

  constructor(doctors: IComparedDoctorParams[], values: IRegister) {
    this.doctors = doctors.slice();
    this.cities = [...new Set(doctors.map((doctor) => doctor.city))];
    this.specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];
    this.values = values;
  }

  filterByCity() {
    if (this.values.city) {
      this.doctors = this.doctors.filter((doctor) => doctor.city === this.values.city);
    }
    return this;
  }

  filterByGender() {
    if (this.values.sex) {
      this.doctors = this.doctors.filter((doctor) => {
        if (
          !doctor.params ||
          (doctor.params && !doctor.params.gender) ||
          (doctor.params && doctor.params.gender === this.values.sex)
        ) {
          return doctor;
        }
      });
      this.specialties = this.specialties.filter((specialty) =>
        this.doctors.find((doctor) => doctor.specialty === specialty)
      );
    }
    return this;
  }

  filterBySpecialty() {
    if (this.values.specialty) {
      this.doctors = this.doctors.filter((doctor) => {
        return doctor.specialty === this.values.specialty;
      });
    }
    return this;
  }
}

export default Filter;
