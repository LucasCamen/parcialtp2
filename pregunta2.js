/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne el array ordenado por la propiedad: abv (grado alcoholico)
 * 2.- Desarrollar una function que retorne el promedio de abv (grado alcoholico) de todas las cervezas
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

  function orderBeers(beers){
       return beers.sort(((a, b) => a.abv - b.abv))

  };

  function getAverage(beers){
      let acum = 0;
      let cont = 0;
      beers
      .forEach(beer => {
          acum += beer.abv;
          cont ++;
      });
      return acum / cont;
  }


  console.log(orderBeers(beers));
  console.log("Promedio: ", getAverage(beers) );