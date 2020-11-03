  
/**
 * Con el objeto de inventario, se pide desarrollor una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna 'Venta exitosa' si la
 * cantidad luego de disminuir queda en 0, se quita la propiedad del array y se retorna 'Venta exitosa' 
 * si la cantidad es negativa no se actualiza el objeto y se retorna 'Imposible de realizar la venta'
 * 
 */

const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

function sale(article, cant){
    
    if (inventory[article] >= cant){
            inventory[article] -= cant;
        if (inventory[article]=== 0){
            console.log('Venta Exitosa');
            delete inventory[article];
        } else {
            console.log('Venta Exitosa');
        }
    } else {
        console.log('Imposible de realizar la venta');
        }
}

sale('pants',5);

console.log(inventory);