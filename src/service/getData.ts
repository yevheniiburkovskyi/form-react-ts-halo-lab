const getData = async (url: string) => {
  const res = await fetch(url);
  return res;
};

export default getData;
