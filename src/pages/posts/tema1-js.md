---
layout: "../../layouts/BlogPost.astro"
title: "Tema 1: CallStack o pila de llamadas"
description: "Este es el primer tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "30 Oct 2022"
heroImage: "/js01.jpg"
tags:
  - Programaci贸n
---

El callStack es como un mapa que usan los motores de JS a la hora de ejecutar nuestros programas. Y sirve para saber que funci贸n se esta ejecutando en ese momento y que funciones han pasado previamente.

Entonces de esta manera sabe si una funci贸n que se esta ejecutando debe volver a una funci贸n que ya paso. (recursividad 馃樈)

Debemos recordar que el motor de JS ejecuta una sola cosa a la vez. Asi que esto funciona como una pila donde las funciones se ir谩n apilando segun como vayan ingresando. Y el ultimo en ingresar sera el primero en salir.

![This is a placeholder image description](/programacion/tema1.png)

Al concepto de callStack viene de la mano del concepto de Scoope. El scoope es el contexto actual de ejecucion. Esta conformada por variables y funciones que se pueden acceder cuando se esta ejecutando una funcion. El scoope puede ser local o global.

Cada vez que se llama a una funcion se crea un scoope y se registra en el llamado de esa funci贸n.
