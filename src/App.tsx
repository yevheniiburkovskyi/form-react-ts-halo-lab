import React from 'react';

import Form from './components/Form/Form';
import { IDoctorDataArrays } from './types/types';
import { selectApi } from './utils/selectApi';
import useFetchAll from './hooks/useFetchAll';
import { Loading } from './components/Form';

const App = () => {
  const { data, loading, error } = useFetchAll<IDoctorDataArrays>(selectApi);
  return (
    <main>
      {(data && <Form data={data} />) ||
        (loading && <Loading />) ||
        (error && <div>Something wrong</div>)}
    </main>
  );
};

export default App;
