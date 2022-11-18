---
layout: "../../layouts/BlogPost.astro"
title: "Tema 2: Tipos primitivos"
description: "Este es el segundo tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "31 Oct 2022"
heroImage: "/js02.png"
tags:
  - Programación
---

Los tipos primitivos son los String, number, boolean, bigInt, Symbol. El resto son tratados como objetos: Array, funciones, fechas, expresion regular.

String → Js lo codifica en formato UTF-16

number → utiliza formato IEEE 754 cada numero ocupa 64 bits en la memoria por lo que es recomendable usar .toFixed(2) para tener una aproximacion.

valores falsos → ‘ ’, null, undefined, NaN

```javascript

    var t= ''; => //esto me dara undefined
    !t; => //esto me dara verdadero
    !!t; => //esto  me dara falso


```

Los tipos de datos no tienen propiedades ni metodos. Pero existen metodos tales como .toLoweCase() .toString que nos permiten acceder a propiedades de un valor primitivo. Lo que ocurre acá es que el motor de JS crea un objeto temporal del valor y a ese valor se le conoce como OBJECT WRAPPER. Es temporal porque el motor lo utiliza solo por unas fracciones de segundo, despues los desecha, los borra de la memoria.

Null → Es el tipo de dato para representar la ausencia de valor. Sirve para decir que una variable no contiene nada, esta vacia o que todavia no conocemos su valor. Su usa mucho para inicializar variables que luego si recibiran un valor.

UNDEFINED -> Significa tipo de dato desconocido. Es un valor que deberiamos dejar para que el motor de JS asigne automaticamente.

Symbol -> Se usa para crear valores unicos, irrepetibles. Un simbolo no puede ser igual a otro, solo asi mismo. Son buenos reemplazos para valores constantes que podrian llegar a ser Strings.
