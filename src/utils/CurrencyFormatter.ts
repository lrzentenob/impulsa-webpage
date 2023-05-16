export  const formatLocalCurrency = (numero:number, currencySy:string, fractionSy:string,decimalSy:string) => {
  const formmatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  const numberString = formmatter
    .formatToParts(numero)
    .map(({ type, value }) => {
      
      switch (type) {
        case "currency":
          return currencySy;
        case "fraction":
          return fractionSy;
        case "decimal":
          return decimalSy;
        default:
          return value;
      }
    })
    .reduce((string, part) => string + part );

  return numberString;
};