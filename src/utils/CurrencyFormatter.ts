
export const formatLocalCurrency = (numero: number) => {

  const formmatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
  });

  const numberString = formmatter.formatToParts(numero).map( ( { type, value } ) => {
      switch (type) {
          case 'currency': return '$' ;
          default: return value;
      }
      
  }).reduce((string, part) => string + part);

  return numberString;
}

export function getCurrentYear() {
    const today  = new Date();
    return today.getFullYear();

}

export function getYearsFromYear( yearFounded: number) {
    const todayYear = new Date().getFullYear();
    return todayYear - yearFounded;
}