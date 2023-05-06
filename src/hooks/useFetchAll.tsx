import { useEffect, useMemo, useState } from 'react';

import getData from '../service/getData';
import { IFetchAllData } from '../types/types';

interface IApiObj {
  [key: string]: string;
}

function useFetchAll<ResponseTypes>(selectApi: IApiObj): IFetchAllData<ResponseTypes> {
  const [data, setData] = useState<ResponseTypes>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const urlArr = useMemo(() => Object.values(selectApi), [selectApi]);
  const resObj: IApiObj = useMemo(() => ({ ...selectApi }), [selectApi]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await Promise.all(
          urlArr.map((url) => getData(url).then((res) => res.json()))
        );
        setData(
          response.reduce((obj, resp, i) => {
            obj[Object.keys(selectApi)[i]] = resp;
            return obj;
          }, resObj)
        );
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, [resObj, selectApi, urlArr]);

  return { data, loading, error };
}

export default useFetchAll;
