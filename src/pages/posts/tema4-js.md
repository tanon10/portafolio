---
layout: "../../layouts/BlogPost.astro"
title: "Tema 4: Implicito, Explicito, Nominal, Estructuracion"
description: "Este es el cuarto tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "02 Nov 2022"
heroImage: "/js04.jpg"
tags:
  - Programación
---

Para este tema tenemos que tener en cuenta el Sistema de tipos. Y estas son las reglas que impone un lenguaje para clasificar que tipos de valores existen, como podemos manipularlos y cuales son las operaciones validas para realizar con ellos y cuales no, las que pueden dar error.

### Chequeo de tipos

Es el proceso de verificar y hacer cumplir las restricciones de tipos que existen en un lenguaje. Basicamente es, si a una variable le dijimos que seria un entero luego le asignamos un String u otro valor de otro tipo. Cuando un lenguaje es compilado el chequeo de tipos lo hace antes de que la computadora pueda leer el archivo que el compilador a generado. Y si no pasa el chequeo ps no se compila. Esto es para evitar los errores que podamos cometer.

En los lenguajes que no son compilados el chequeo sera dinámico es decir cuando se esta ejecutando.

### Exigencia de tipos

Que tan exigente es un lenguaje para considerar que estamos cometiendo un error de tipos.

```javascript
/*Por ejemplo unir String con objetos o sumar String con enteros o sumar booleanos, todo esto no me dara un error, JS intentara darme un resultado*/
//Por ejemplo:
2 + BigInt(20); //esto me dara error de tipo
var texto = "hola";
texto(); /*esto me dara error de tipos tambien, llamar una funcion que no lo es
  o tratar de acceder a una propiedad de un objeto que es null o undefined*/
```

Si no estamos seguros que tipo de variables estamos operando entonces nos encontraremos con resultados totalmente inesperados.

### Coersion de tipos

Es la conversion implicita de tipos que realiza el motor de JS para poder concretar una operacion. Es decir que JS hara lo mejor que pueda para darnos un resultado. Por lo que es recomendable realizar conversion explicita de tipos. De esto tenemos tres tipos: String, number y boolean

```javascript
  String(123) => lo convierte en string
  Number('3.14') => lo convierte en number
  Boolean(null) => lo convierte en un booleano

  o tambien usando el metodo .toString()
  y para el caso de transformar a number le anteponemos el + => +'1234'
  en caso de booleanos es colocando el ! o !!
```

### Equivalencia y compatibilidad de tipos

Como un lenguaje determina que un tipo es compatible con otro tipo o equivalente a otro tipo. Dos tipos son compatibles cuando tienen el mismo nombre o cuando uno es un subtipo del otro(por herencia) por ejemplo en clases abstractas o interfaces en Java. Y en caso estos sean modificados entonces debemos modificar las clases que estan extendiendo para que sigan siendo compatibles.

### Tipado estructural

Para que dos tipos sean compatibles solo basta con que compartan la estructura que nos interesa. este es tipado estatico

### Tipado dinamico - duck Typing

No nos importa de que tipo es un objeto, siempre y cuando tenga los atributos y metodos a los cuales queramos acceder
