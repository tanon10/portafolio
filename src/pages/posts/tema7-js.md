---
layout: "../../layouts/BlogPost.astro"
title: "Tema 7: Expression vs Statement "
description: "Este es el septimo tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "05 Nov 2022"
heroImage: "/js03.png"
tags:
  - Programación
---

Comenzemos introduciendo el termino Sintaxis de lenguaje de programación.

#### Sintaxis de lenguaje de programación

Son las reglas que definen como podemos combinar distintos simbolos para producir instrucciones válidas y asi crear un programa que la computadora entienda. Una computadora no puede entender un programa si no cumple con la sintaxis del lenguaje que estemos usando.

### Expresión o Expression

Es una unidad de codigo que produce un valor. Además, algunas expresiones pueden tener efectos secundarios.

- Expresión primaria - este es una expresión que con una sola palabra estamos produciendo un valor. Basicamente cualquier valor primitivo.
- Expresión de función - esto es cuando escribimos una función en un lugar del código donde se espera un valor. Podemos asignar una función como variable o podemos pasarlo como parametro cuando declaramos otra función. Ahora algo importante, cuando pasamos una función como valor no es necesario colocarle un nombre, podemos pasarlo como una función anonima o función de flecha.

```jsx

    numeros.filter(function filtrarPares(numero){
    return numero % 2 === 0;
    })
    numeros.filter(function(numero){ /*función anonima*/
    return numero % 2 === 0;
    })
    numeros.filter(numero numero % 2 === 0) /*funcion de flecha*/


```

En JS cuando invocamos a una función siempre obtendremos algún valor de retorno. Si asignamos una funcion que no retorna nada a un valor entonces esté sera undefined, pero en cambio si esta función si retorna y lo asignamos a un valor este valor tendra el valor de retorno. Ahora todo bien cuando es un valor primitivo el que retorna. Pero debemos tener presente cuando la funcion retorna un objeto, ya que cuando lo asignamos a un valor, estamos pasando la referencia de memoria retornada por esa función.

Cuando creamos un objeto con un constructor tambien estamos creando un nuevo valor. Crear un objeto es similar a invocar a una función. Solo que se antepone la palabra new.

```jsx
let variable = new Date(
  2022,
  09,
  10
); /*estamos creando un objeto de tipo date*/
```

Los operadores son un ejemplo de expresiones, estos nos permiten generar nuevos valores a partir de una o más expresiones (let res= 10 + 20 ) pero no solo tendremos operadores numericos tambien operadores booleanos.

```jsx
let activo = false;
activo = !activo; /*ahora asignamos el valor true a activo con el operador
negacion*/
let activo = usuario.nombre !== "Invitado"; /*donde activo ahora sera true
porque efectivamente este operador de diferencia es verdadero*/
```

Ahora cuando asignamos un valor a una variable recordemos que estamos usando
el operador de asignación. Pero debemos recordar que usamos el operador de asignacion
principalmente por el efecto secundario que realiza, que es que una variable tome
un nuevo valor.

Debemos tener en cuenta otras expresiones

- Expresion de función asincrona => async funtion
- Invocacion de función asincrona => await
- Generadores = > function\*

Pero estos serán tratados más adelante.

### Sentencia o Statement

Una sentencia es una acción que JS ejecuta para que avance la lógica de nuestro programa.

- Sentencia de Expresión, sirve para evaluar una expresión. Cuando evaluamos una expresión, lo que buscamos en el efecto secundario que este produzca. Por ejemplo invocar una función.
- Sentencia Vacia, basicamente es que en una sentencia no tengamos nada y simplemente le colocamos un punto y coma para terminar la sentencia.
- Sentencia de bloque, es aquel que alberga varias instucciones

```jsx
if (error) {
  logError(error); // cada instruccion termina con punto y coma
  mostrarError(error);
} /* el bloque en si no termina en punto y coma, cosa contraria cuando teniamos
    una expresion*/
let a = function () {
  console.log("Hello my friend");
}; //el punto y coma termina el final de la instruccion de asignación.
```

- Sentencia de declaración, es cuando declaramos una o varias variables.
  - Declaración de función o sentencia de función, sirve para crear una función con el nombre y los parámetros indicados dentro del scope donde se encuentra esa sentencia.

```jsx
function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}
//esto es diferente a una expresion de función
const saludar = function (nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
};
saludar();
/*No podemos declarar una función sin nombre ya que no podriamos llamarlo
    nunca a menos que le asignemos un valor al instante*/

(function (nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
})("Antonio", "Caldas"); /* esta manera de declarar la llamamos IIFE 
    expresion de funcion inmediatamente invocada pero no se crea en un scope
    solo dentro del parentesis*/
```

Hay algo interesante que se puede realizar con la expresion de función y es que la podemos nombrar pero para usarlo como recursividad.

```jsx
const calcular = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); /* este nombre (factorial) solo se puede llamar 
dentro de la función, no desde fuera para eso tenemos el nombre de la variable*/
};
calcular(5);
```

- Ahora tenemos que saber del hosting, lo que hace esté es que, cuando se declara una función nosotros podremos invocarla en cualquier parte del codigo como si estuviera en un scope global. Por lo que es muy recomendable usar expresiones de funcion y nos acostumbramos a que cada funcion es un valor mas.
- Sentencias de control, nos permite alterar el flujo normal de ejecución. Podemos decidir que flujo va a seguir la ejecución de nuestro programa. Tenemos el if, switch, for, for in, for on, while, do while.
- Sentencias de salto, se usa para que la ejecución de nuestro programa salte o retorne a otra parte. Tenemos el break y continue para algunos algoritmos.
- Sentencia de retorno (return), esta corta la sentencia de funcion y retorna un valor al lugar donde se le invoco y reemplazando a la función con el valor que retorna.
- Sentencia throw. La usamos para capturar errores en nuestro codigo.

```jsx
function sumar(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) throw new Error("Solo ingresar numeros");
  return n1 + n2;
}
sumar(2, {}); // nos dara el error por consola.
```

- La sentencia try.. catch.. finally **especifica un bloque de código para probar junto con una respuesta en caso de que ocurra un error**. La sentencia try puede contener uno o más bloques try y termina con al menos una cláusula catch o finally.

```jsx
try {
  abrirArchivo(archivo);
  leerArchivo(archivo);
} catch (err) {
  console.error(err.message);
} finally {
  cerrarArchivo(archivo);
}
```

- La sentencia ‘use strict’, sirve para ver nuestro programa en modo estricto, este tema sera tocado en otra entrada por que es extenso.
