import CustomInput from '../CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomButton from '../CustomButton/CustomButton';
import Loading from '../Loading/Loading';

import useFetchAll from '../../hooks/useFetchAll';
import useFilterOptions from '../../hooks/useFilterOptions';

import { selectApi } from '../../utils/selectApi';
import { genderArr } from '../../utils/gender';
import { schema } from '../../utils/formValidationShecma';
import findDoctorByName from '../../utils/findDoctorByName';

export {
  CustomInput,
  CustomSelect,
  CustomButton,
  Loading,
  useFetchAll,
  useFilterOptions,
  selectApi,
  genderArr,
  schema,
  findDoctorByName,
};