import { useMemo } from 'react';

import { IDoctorDataArrays, ISelectOption } from 'types/types';
import { IRegister } from '../types/types';

import compareDoctorsParams from '../utils/compareDoctorsParams';
import Filter from '../utils/Filter';
import filterOptions from '../utils/createOptions';

export interface IFilteredOptions {
  filteredCitiesOptions: ISelectOption[];
  filteredSpecialtiesOptions: ISelectOption[];
  filteredDoctorsOptions: ISelectOption[];
}

function useFilterOptions(data: IDoctorDataArrays, values: IRegister) {
  const comparedDoctors = useMemo(
    () => compareDoctorsParams(data.city, data.specialty, data.doctor),
    [data]
  );

  const filteredOptions = useMemo(() => {
    const filterCase = new Filter(comparedDoctors, values);
    filterCase.filterByData().filterByCity().filterByGender().filterBySpecialty();
    return filterOptions(filterCase.doctors, filterCase.cities, filterCase.specialties);
  }, [comparedDoctors, values]);

  return { options: filteredOptions, doctors: comparedDoctors };
}

export default useFilterOptions;
