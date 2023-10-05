const plusMinusStyler = (value) => {
    const numericValue = value.replace(/[^-\d]/g, "");
    const prefix = numericValue.startsWith("-") ? "" : "+";
    return `${prefix}${numericValue}`;
  };

  export default plusMinusStyler;