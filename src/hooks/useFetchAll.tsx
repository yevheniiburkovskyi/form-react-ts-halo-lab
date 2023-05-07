import { useEffect, useMemo, useState } from 'react';

import getData from '../service/getData';
interface IApiObj {
  [key: string]: string;
}

interface IFetchAllData<ResponseType> {
  data: ResponseType | undefined;
  loading: boolean;
  error: boolean;
}

function useFetchAll<ResponseTypes>(selectApi: IApiObj): IFetchAllData<ResponseTypes> {
  const [data, setData] = useState<ResponseTypes>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const urlArr = useMemo(() => Object.values(selectApi), [selectApi]);
  const resObj: IApiObj = useMemo(() => ({ ...selectApi }), [selectApi]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          urlArr.map((url) => getData(url).then((res) => res.json()))
        );

        const responseData = responses.reduce(
          (obj, resp, i) => {
            obj[Object.keys(selectApi)[i]] = resp;
            return obj;
          },
          { ...resObj }
        );

        setData(responseData);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [resObj, selectApi, urlArr]);

  return { data, loading, error };
}

export default useFetchAll;
