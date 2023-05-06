import { IComparedDoctorParams } from '../types/types';

const findDoctorByName = (doctorFullName: string, doctors: IComparedDoctorParams[]) => {
  const fullNameArr = doctorFullName.split(' ');
  const currentName = fullNameArr[0];
  const currentSurname = fullNameArr[1];
  const currentDoctor = doctors.find(
    (doctor) => doctor.name === currentName && doctor.surname === currentSurname
  );
  return currentDoctor;
};

export default findDoctorByName;
