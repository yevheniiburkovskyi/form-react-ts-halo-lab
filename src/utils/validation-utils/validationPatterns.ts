const validationPatterns = {
  date: /^\d{2}\/\d{2}\/\d{4}/,
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  phone: /^\+380\d{9}$/,
};

export { validationPatterns };
