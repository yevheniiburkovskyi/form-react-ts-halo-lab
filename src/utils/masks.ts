export interface IInputMasks {
  name: {
    mask: string;
    placeholder: string;
  };
  birthday: {
    mask: string;
    placeholder: string;
  };
  phone: {
    mask: string;
    placeholder: string;
  };
  email: {
    mask: string;
    placeholder: string;
  };
}

const masks: IInputMasks = {
  name: {
    mask: 'a'.repeat(1000),
    placeholder: 'Enter name',
  },
  birthday: {
    mask: '99/99/9999',
    placeholder: 'dd/mm/yyyy',
  },
  phone: {
    mask: '+380 (99) 999-99-99',
    placeholder: '+380 (__) ___-__-__',
  },
  email: {
    mask: 'a'.repeat(1000),
    placeholder: 'Enter email',
  },
};

export { masks };
