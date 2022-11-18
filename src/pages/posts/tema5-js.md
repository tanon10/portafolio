---
layout: "../../layouts/BlogPost.astro"
title: "Tema 5: == vs === vs typeof"
description: "Este es el quinto tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "03 Nov 2022"
heroImage: "/js01.jpg"
tags:
  - Programación
---

Cuando usamos `===` en JavaScript, estamos probando la igualdad **estricta .** Esto significa que tanto el **tipo** como el **valor** que estamos comparando deben ser iguales.

Cuando usamos `==` en JavaScript, estamos probando **la igualdad flexible.** Coerción de tipo significa que solo se comparan dos valores**después**tratando de convertirlos en un tipo común.

Algo curioso pasa cuando realizamos la siguiente igualdad flexible.

```javascript
falso == 0; // Esto es verdadero por los valores falsos en JavaScript
```

Existen seis valores falsos en JS que tenemos que tener en cuenta:

```javascript

    false — falso booleano
    0 - Número cero
    “”- string vacio
    null
    undefined
    NaN- No un número


```

Comparación de valores falsos a tener en cuenta

```javascript
falso == 0; // verdadero
0 == ""; // verdadero
"" == falso; // verdadero
nulo == nulo; // verdadero
indefinido == indefinido; // verdadero
nulo == indefinido; // verdadero
NaN == nulo; // falso NaN no equivale a nada ni siquiera a si mismo
NaN == indefinido; // falso
NaN == NaN; // falso
```

Hay algo que debemos tener bastante en mente, cuando nosotros comparamos objetos en realidad estamos comparando referencias de memoria. Aqui es donde entra el operador identidad, cuando lo usamos para comparar objetos, este nos dice si estamos comparando el mismo espacio de memoria. Entonces una manera de saber como dos objetos que tienen diferentes espacios de memoria son iguales es transformarlo a un string

```javascript

    var tanon1 = {nombre:'tanon' , apellido: 10};
    var tanon2 = {nombre:'tanon' , apellido: 10};
    JSON.stringify(tanon1) = JSON.stringify(tanon2) //true
    var tanon3 = {apellido: 10 , nombre:'tanon'};
    JSON.stringify(tanon1) = JSON.stringify(tanon3) //false


```

Esta manera puede consumir muchos recursos, porque un objeto seria enorme y tendria que hacer una comprobacion con todas los atributos y en caso tengan las mismas propiedades pero diferente posicion entonces nos daria un false. Por lo que seria mejor usar una libreria que nos permita realizar esta comparación. 😂
