/**
 * Desarollo una funcion que añada una propiedad precio al array de cervezas y
 * coloque los siguientes precios por tipo
 * 
 * IPA: 90 
 * Pilsner: 70
 * Stout: 120
 * Wheat: 95
 * 
 * La función debe retornar el nuevo array ordenado por precio, poniendo la cerveza las cara primero
 */

const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];


function addPrice(){
    return beers
    .map (beer => ({name: beer.name, abv: beer.abv, label: beer.label, type: beer.type, price: calcularPrecio(beer.type) }) )
    .sort ((a, b) => b.price - a.price);
    };

    console.log(addPrice());

    function calcularPrecio (tipo){
        let precio;
        if (tipo == 'IPA'){
            precio = 90;
        } else if (tipo == 'Pilsner'){
            precio = 70;
        }else if (tipo == 'Stout'){
            precio = 120;
        } else {
            precio = 95;
        }
       return precio; 
    };
