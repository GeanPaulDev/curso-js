//Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

//Javascript es un lenguaje de tipo dinamico, no se especifica el tipo de dato
producto = 2;
console.log(producto);

//Se puede inicializar sin valor y asignarlo despues
var disponible;
console.log(disponible); // Esto nos da undefined
disponible = true;
console.log(disponible);
disponible = false;
console.log(disponible);

//Podemos inicializar multiples variables
var categoria = "computadoras",
  marca = "Marca famosa",
  calificacion = 5;
