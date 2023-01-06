---
layout: "../../layouts/BlogPost.astro"
title: "Tema 8: Message Queue y Event Loop"
description: "Este es el octavo tema de los 33 conceptos que todo desarrollador de JS debe conocer"
createdAt: "15 Nov 2022"
heroImage: "/js04.jpg"
tags:
  - Programación
---

Message queue y event loop son ambos conceptos importantes en JavaScript y en la programación en general. Una cola de mensajes es una estructura de datos que almacena los mensajes o tareas que deben ser procesados por un programa. El bucle de eventos, por otro lado, es el mecanismo que utiliza un programa para procesar los mensajes en la cola de mensajes y realizar las tareas correspondientes.

En JavaScript, la cola de mensajes se utiliza para almacenar las tareas que deben ser ejecutadas de manera asíncrona, es decir, de manera que no bloqueen la ejecución del código principal. Por ejemplo, si necesitamos realizar una operación que puede tardar un tiempo en completarse, como enviar una solicitud a un servidor web, podemos usar una cola de mensajes para asegurarnos de que esa operación se realice en segundo plano, sin bloquear la interfaz de usuario de nuestra aplicación.

El bucle de eventos es el mecanismo que utiliza JavaScript para procesar los mensajes en la cola de mensajes y ejecutar las tareas correspondientes. Cada vez que se agrega un nuevo mensaje a la cola, el bucle de eventos lo saca de la cola y lo procesa en el orden en que fue agregado. De esta manera, asegura que las tareas se ejecutan en el orden correcto y de manera eficiente.

En resumen, la cola de mensajes y el bucle de eventos son conceptos clave en JavaScript que nos permiten realizar tareas de manera asíncrona y eficiente en nuestros programas.
