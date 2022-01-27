// 2 funciones basicas de JS
alert ("Hola 1717");
prompt ("¿Que día es hoy?");

// variables
// version antigua
var estoEsUnaVariable = "variable";
var un_saludo = "Hola!";
// En var el scope es global,permite modificar valor, actualmente es obsoleto

// version nueva desde ES6+
let estoEsOtraVariable = "variable2";
// let tiene un espacio unico, su valor puede ser modificado
const estoEsOtraVariable2 = "variable3";
// const puede ser global y local, no puede modificarse su valor

// saludo
const nombre = prompt ("¿Cual es tu nombre");
alert ("Hola " + nombre);

//intento de calculadora
const primerNumero = prompt ("Introduce un numero");
const segundoNumero = prompt ("Introduce un numero");
const resultadoSuma = parseFloat (primerNumero) + parseFloat (segundoNumero);
alert ("El resultado es: " + resultadoSuma);

// NaN = Not a Number