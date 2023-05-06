import React from 'react';

import Form from './components/Form/Form';
import { FormContextProvider } from './components/Form/FormContext/FormContext';

const App = () => {
  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  );
};

export default App;
