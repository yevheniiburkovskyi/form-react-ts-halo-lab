function checkDateValues(value: string) {
  const [day, month, year] = value.split('/');
  const parsedDay = +day;
  const parsedMonth = +month;
  const parsedYear = +year;
  const currentYear = new Date().getFullYear();
  return parsedYear < currentYear && parsedDay < 32 && parsedMonth < 13 && parsedYear > 1920;
}

function checkSiblingInputs(
  firstValue: string | undefined,
  secondValue: string | undefined,
  pattern: RegExp
) {
  if (firstValue || secondValue) {
    if (firstValue) {
      return pattern.test(firstValue);
    }
    return true;
  }
  return true;
}

export { checkDateValues, checkSiblingInputs };
