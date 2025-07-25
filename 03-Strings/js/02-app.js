const producto = "Monitor 20 pulgadas";
console.log(producto);

//Métodos para los strings
 // Longitud del string -> length no utilizar paréntesis porque es una propiedad
console.log("tamaño de la cadena de texto : " + producto.length);

// Posición de un texto dentro del string donde empieza esa palabra, sensible a mayúsculas y minúsculas
console.log("posicion donde inicia esa palabra : " + producto.indexOf("pulgadas")); 

// Verifica si un texto está incluido ,sensible a mayúsculas y minúsculas  
console.log("existe el texto dentro de toda la cadena de texto? : " + producto.includes("pulgadas")); 