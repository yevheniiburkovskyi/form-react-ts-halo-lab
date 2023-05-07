import { IComparedDoctorParams } from '../types/types';

const findDoctorByName = (doctorFullName: string, doctors: IComparedDoctorParams[]) => {
  const [name, surname] = doctorFullName.split(' ');
  const currentDoctor = doctors.find(
    (doctor) => doctor.name === name && doctor.surname === surname
  );
  return currentDoctor;
};

export default findDoctorByName;
