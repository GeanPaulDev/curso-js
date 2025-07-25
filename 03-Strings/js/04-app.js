const producto = " Monitor";
console.log(`Producto ${producto}`);
console.log(`Longitud de la cadena: ${producto.length}`);
//Metodos para elminar spacios en blanco al inicio
console.log("Reduciendo el espacio al inicio: " +producto.trimStart().length);

const precio = "30 USD ";
console.log(`Precio ${precio}`);
console.log(`Longitud de la cadena: ${precio.length}`);
//Metodos para elminar spacios en blanco al final
console.log("Reduciendo el espacio al final: " +precio.trimEnd().length);


const nombre = " GeanPaul ";
console.log(`Nombre ${nombre}`);
console.log(`Longitud de la cadena: ${nombre.length}`);
//Metodos para elminar spacios en blanco al inicio y al final juntos
console.log("Reduciendo el espacio al inicio y final juntos: " +nombre.trimStart().trimEnd().length);
//Metodos para elminar spacios en blanco al inicio y al final juntos en un solo paso
console.log("Reduciendo el espacio al inicio y final juntos: " +nombre.trim().length);