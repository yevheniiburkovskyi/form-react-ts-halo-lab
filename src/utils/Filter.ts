import { IRegister } from '../types/types';
import { IComparedDoctorParams } from '../types/types';
import { validationPatterns } from './validation-utils/validationPatterns';

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

  filterByData() {
    const pattern = validationPatterns.date;
    if (pattern.test(this.values.birthday)) {
      const currentAge = this._getPatientAge(this.values.birthday);
      if (currentAge > 16 && currentAge < 45) {
        this.doctors = this.doctors.filter(
          (doctor) => !doctor.params || (doctor.params && doctor.params.gender)
        );
      } else if (currentAge > 45) {
        this.doctors = this.doctors.filter(
          (doctor) =>
            !doctor.params || (doctor.params && doctor.params.gender) || doctor.params.minAge
        );
      } else if (currentAge < 17) {
        this.doctors = this.doctors.filter(
          (doctor) =>
            doctor.isPediatrician && (!doctor.params || (doctor.params && !doctor.params.minAge))
        );
      } else {
        this.doctors = [];
      }
    } else if (this.values.birthday !== '') {
      this.doctors = [];
    }
    return this;
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

  _getPatientAge(date: string) {
    const [day, mounth, year] = date.split('/');
    const currentDate = new Date();
    if (currentDate.getFullYear() < +year) {
      return -1;
    }
    const birthDate = new Date(+year, parseInt(mounth, 10) - 1, parseInt(day, 10));
    const timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  }
}

export default Filter;
