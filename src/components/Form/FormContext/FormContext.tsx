import React, { ReactNode, useState } from 'react';
import { IRegister } from '../../../types/types';

interface IFormContext {
  formContextValues: IRegister;
  setFormContextValues: React.Dispatch<React.SetStateAction<IRegister>>;
}

interface IProps {
  children: ReactNode;
}

export const initialContextValue: IFormContext = {
  formContextValues: {
    name: '',
    birthday: '',
    sex: '',
    city: '',
    specialty: '',
    doctor: '',
    email: '',
    phone: '',
  },
  setFormContextValues: () => {},
};

const FormContext = React.createContext(initialContextValue);

const FormContextProvider: React.FC<IProps> = ({ children }) => {
  const [formContextValues, setFormContextValues] = useState<IRegister>(
    initialContextValue.formContextValues
  );

  return (
    <FormContext.Provider value={{ formContextValues: formContextValues, setFormContextValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
export { FormContextProvider };
