// Es la manera mas comun de crear una variable de tipo String
const producto = "Monitor 20 Pulgadas";
console.log(producto);

// Es otra manera de crear una variable de tipo String, no es recomendable por temas de rendimiento
const producto2 = String("Monitor 24 Pulgadas");
console.log(producto2);

// Otra forma de crear una variable de tipo String, pero no es recomendable, ya que crea un objeto String y no una cadena de texto simple
const producto3 = new String("Monitor 27 Pulgadas");
console.log(producto3);