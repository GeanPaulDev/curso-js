const producto = "Monitor ";
const precio = "30 USD";
console.log(producto.concat(precio)); 
console.log(producto+precio); 
console.log("El producto : " +producto+ "tiene un precio de : " +precio);
console.log("El producto : ",producto,"tiene un precio de : ",precio);

//En ECMACS6 podemos usar template strings , es la mejor manera de concatenar
console.log(`El producto : ${producto} tiene un precio de : ${precio}`);
console.log(`El producto : ${producto}${precio}`);


