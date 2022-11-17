---
layout: "../../layouts/BlogPost.astro"
title: "Tema 3: Tipos de valor y tipos de referencia"
description: "Este es el tercer tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "01 Nov 2022"
heroImage: "/js03.png"
tags:
  - Programación
---

Cuando asignamos un valor primitivo a una variable esta ocupa un lugar en la memoria.

```javascript
var fruta = "banana";
```

Pero si nosotros cambiamos el valor de la fruta

```javascript
var fruta = "manzana";
```

Se descarta el valor de banana y queda el de manzana.Ahora en caso guardemos el valor de una variable en otra variable sucede algo curioso.

```javascript
    var fruta = 'banana';
    console.log(fruta); // banana
    var fruta2 = fruta;
    console.log(fruta); // banana
    //Ahora si cambio
    var fruta = 'pera'
    console.log(fruta); -> pera
    console.log(fruta2); -> banana
```

Esto pasa porque al hacer var fruta2 = fruta; nosotros estamos copiando el valor y almacenandolo en memoria como algo fijo.
Cosa contrario con los objetos y array, que trabajan con una memoria dinamica porque recordemos que en un objeto podemos agregar cosas y eliminarlas.

```javascript
    var fruta ={
    nombre='banana',
    cantidad=4,
    tienecascara=true,
    }
    fruta.color='amarillo' //agrega
    delete fruta.tienecascara; //elimina
```
