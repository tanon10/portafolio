---
layout: "../../layouts/BlogPost.astro"
title: "Tema 6: Scope, block scope y lexical scope"
description: "Este es el sexto tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "04 Nov 2022"
heroImage: "/js02.png"
tags:
  - Programación
---

El scope es lo que le da significado a las variables, determina el conjunto de variables que podemos acceder desde una linea de código. Decimos que JS tiene un scoope léxico o estático, ya que el scoope de cada variable se determina leyendo el código del programa.

Ahora tenemos que tener presente dos conceptos que en palabras son similares pero en significado distinto, estos son Contexto y Contexto de ejecución.

Cuando hablamos de Contexto nos referimos al valor que tiene la variables this en algun momento de la ejecución. Cuál es el objeto que está ejecutando una función.

> Ahora cuando hablamos de Scope estamos hablando del contexto de ejecución. El significado que le demos a una variable.

Nosotros como desarrolladores entonces vamos a decidir donde vamos a usar nuestras variables. Si en el Scope Global o Scope Local.

#### Scope Global

<ul className='italic px-4 space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400'>
  <li>
  Las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa. Estas variables son declaradas fuera de toda función o bloque de código. Sin importar si las declaramos con var, let o const.
  </li>
  <li>
  Las variables globales estarán en memoria durante toda la ejecución del programa.
  </li>
</ul>

#### Scope Local

Las variables locales solo pueden ser accedidas desde una parte de nuestro programa. Y solo estarán en memoria durante la ejecución de la función o bloque.

- Scope de Función
  - Accesibles dentro de toda la función, pero no fuera de la misma.
  - Si declaramos un var dentro de una función, esta variable será accesible dentro de toda la función.
- Scope de Bloque
  - Un bloque de codigo es una porción de código que está encerrada entre llaves: { }
  - Las variables (let, const) dentro del scope de bloque son accesibles dentro de todo el bloque, pero no fuera del mismo.

Ahora, veamos un concepto nuevo, Cadena de Scopes, JS buscara el scope mas cercano si es que no lo encuentra en una determinada función de bloque, hasta llegar al scope global, hasta que encuentre la variable que deseamos. Y de no existir obviamente nos dara un error.

¿Pero que pasa cuando declaramos una variable en el scope global con el mismo nombre en el scope Local?

```jsx
var fruta = "banana";
function comer() {
  var fruta = "manzana";
  function lavar() {
    console.log("Lavando " + fruta);
  }
  lavar();
  console.log("Comiendo " + fruta);
}
comer(); /*Aqui nos dara Lavando manzana y Comiendo manzana obviamente por el ocultamiento de variables donde la cadena de Scopes nos dara el scope	mas cercano dejando de lado el scope superior*/
```

Y si quisiera poder acceder a la variable banana?

```jsx
var fruta = "banana";
function comer() {
  var fruta = "manzana";
  function lavar() {
    console.log(
      "Lavando " + window.fruta
    ); /*Pero esto tambien es porque declaramos	a fruta como var y esto me permite agregarlo al objeto global window.	Si fruta hubiese sido let entonces nos daria un undefined y esto es porque ya no se agrega a window sino a script, pero let fruta sigue siendo global */
  }
  lavar();
  console.log("Comiendo " + fruta);
}
comer(); /*Nos regresaria Lavando banana y Comiendo banana*/
```
