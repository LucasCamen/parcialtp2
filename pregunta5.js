/**
 * Dato el array de inventores, desarrollar una funcion que agregue como una nueva propiedad
 * los descubrimientos de los inventores por ej. para Einstein 
 * ['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general']
 * 
 */

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  /**
   * Función que agrega descubrimientos en el array de inventors
   * @param {*} inventor 
   * @param {*} discoveries 
   * @param {*} inventors 
   */
  function addDescubrimientos(inventor, discoveries, inventors){
    return inventors
    .map (inventor => ({first: inventor.first, last: inventor.last, year: inventor.year, descubrimientos: [(inventors[inventor] == inventor ? inventor.discoveries : null) }) )
  };

  console.log(addDescubrimientos({ first: 'Albert', last: 'Einstein', year: 1879 }, 
  ['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general'], inventors
  ));

 