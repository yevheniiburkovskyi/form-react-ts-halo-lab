export interface ICity {
  id: string;
  name: string;
}

export interface ISpecialty {
  id: string;
  name: string;
  params?: { gender?: string; minAge: string; maxAge: string };
}

export interface IDoctor {
  id: string;
  name: string;
  surname: string;
  specialityId: string;
  isPediatrician: boolean;
  cityId: string;
}

export interface IInputValues {
  name?: string;
  birthday?: Date;
  gender?: string;
  city?: string;
  doctor?: string;
  specialty?: string;
}

export interface IComparedDoctorParams {
  id: string;
  name: string;
  surname: string;
  specialty: string;
  city: string;
  isPediatrician: boolean;
  params?: {
    minAge?: string;
    maxAge?: string;
    gender?: string;
  };
}

export interface ISelectOption {
  id: string;
  value: string;
}

export interface IDoctorDataArrays {
  city: ICity[];
  specialty: ISpecialty[];
  doctor: IDoctor[];
}

export interface IFetchAllData<ResponseType> {
  data: ResponseType | undefined;
  loading: boolean;
  error: boolean;
}

export interface IRegister {
  name: string;
  birthday: string;
  sex: string;
  city: string;
  specialty: string;
  doctor: string;
  email: string;
  phone: string;
}

export interface IInputMasks {
  birthday: string;
  phone: string;
}

export interface IInputPlaceholders {
  name: string;
  birthday: string;
  phone: string;
  email: string;
}
