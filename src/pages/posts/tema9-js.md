---
layout: "../../layouts/BlogPost.astro"
title: "Tema 9: SetTimeout, setInterval y requestAnimationFrame"
description: "Este es el noveno tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "16 Nov 2022"
heroImage: "/js01.jpg"
tags:
  - Programación
---

SetTimeout, setInterval y requestAnimationFrame son tres funciones comunes en JavaScript que se utilizan para programar tareas para que se ejecuten en el futuro.

SetTimeout se utiliza para programar una función para que se ejecute una sola vez después de un tiempo específico. Por ejemplo, podríamos usar setTimeout para mostrar un mensaje después de 5 segundos:

```jsx
setTimeout(function () {
  alert("¡Hola!");
}, 5000);
```

setInterval, por otro lado, se utiliza para programar una función para que se ejecute repetidamente cada cierto tiempo. Por ejemplo, podríamos usar setInterval para actualizar un contador cada segundo:

```jsx
let count = 0;

setInterval(function () {
  count++;
  console.log(count);
}, 1000);
```

requestAnimationFrame es una función que se utiliza para programar tareas que deben ejecutarse en sincronía con la tasa de actualización de la pantalla. Por lo general, se usa para animaciones en las que queremos asegurarnos de que se muestren de manera suave y sin saltos. Por ejemplo, podríamos usar requestAnimationFrame para animar un elemento en la página:

```jsx
let element = document.getElementById("miElemento");
let pos = 0;

function animate() {
  pos++;
  element.style.left = pos + "px";
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

En resumen, setTimeout, setInterval y requestAnimationFrame son tres funciones útiles en JavaScript que nos permiten programar tareas para que se ejecuten en el futuro de maneras diferentes y adaptadas a distintos usos.
