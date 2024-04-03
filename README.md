# TP2 de Programación Multimedial 4

## Metodología

Integrantes por equipo: 2

Se aprueba con:         6

### Objetivos

- Que aprendan a modelar un problema de un dominio no-trivial.
- Que aprendan a documentar el trabajo realizado.
- Que practiquen trabajar en equipo con gente desconocida.

### Comentarios Adicionales

Las pautas son similares a las del TP1.

Quiero darles la mayor libertad posible para que los resuelvan como quieran. Incluso pueden no usar lo que vimos en clase si saben otra forma. Lo único que les pido es que:

- Estén hechos en TypeScript
- Todos los tipos de datos sean estáticos (o sea, que no haya ningún `any`)
- Me justifiquen en el oral por qué les pareció mejor opción que lo que vimos en clase

Todos los ejercicios van a ser ejecutables en consola nada más. Debe haber un comando en `package.json` que lo ejecute. No vamos a recibir ningun request (para eso esta el TP3) ni a agregar ningún HTML o estilo a nada de esto (para eso esta el TP4). De nuevo, como lo que hicimos en clase.

Pueden asumir cosas que no están aclaradas explícitamente. De hecho, espero que lo hagan. Hice a propósito los enunciados un poco ambiguos. Lo que consideren que asumieron y no fue trivial, recomiendo fuertemente documentarlo. Sus compañeros van a tener que trabajar sobre eso en los proximos TPs.

Recuerden que, por lo general, la solución más simple es la mejor.

----

## Entrega

### Fecha

La fecha límite es el Jueves ??? de Abril de 2024 a las 23:59 hs. Agreguen una `tag` en el repositorio que se llame `tp2`. Ese commit es el que voy a corregir. Si quieren cambiar una `tag` para que apunte a otro commit, probablemente van a tener que primero borrar la existente y despues crearla de nuevo.

Por favor, mandenme un mail a <me@diegofreijo.com> cuando lo tengan listo.

### Código

Todo lo van a resolver en un repositorio de GitHub. Ya los cree yo. Me falta agregar a cada participante a su aplicacion.

Les voy a pedir que el codigo que suban al repo sea un esquelo de una aplicacion MVC, como la que hicimos en clase de los cocineros para repartirnos las parejas. Es decir, que los 3 modulos esten bien definidos. Y adonde van a dedicar la mayor parte del tiempo va a ser el Modelo: que tenga los tipos de datos del dominio definidos y que posea funciones para resolver los casos de uso del enunciado.

El controlador va a solamente recibir lo que diga `index.ts` y pasar ciertos parametros de prueba. La vista va a escribir en consola algo bien crudo.

### GitFlow

Les voy a pedir que usen la version reducida de GitFlow que explique en la clase 2. Si crearon branches por feature, no los borren. Así puedo ver cómo estuvieron trabajando.

### Reporte

El reporte va a ser otra parte importante de esta entrega. Les pido que tenga el formato del que vimos de ejemplo en clase o algo similar. Lo mas importante es que aclaren todo lo que le haga la vida mas facil a los que despues van a tener que agregarle un backend y un frontend. Va a ser un archivo de MarkDown. Puede ser el `README.md` o algun otro archivo que quede clarisimo cual es para alguien que recien entra al repo. No se olviden de aclarar la forma de uso del codigo que hicieron (por ejemplo, que comando de `npm` ejecutar en cada caso).

### Defensa

Les voy a estar mandando horarios para que cada pareja se conecte y tengamos la devolución por Google Meet o Teams. Así no usamos la hora de clase para eso y aburrimos a los que se quedan esperando afuera.

----

## Aplicaciones

1. [Scrapper de precios de Mercado Libre](app1.md)
2. [Gestor de contraseñas online](app2.md)
3. [Interprete de JavaScript online](app3.md)
4. [Scrapper de imagenes de Instagram](app4.md)
5. [Organizador de viajes usando AI](app5.md)
6. [Nuestro propio eCommerce](app6.md)
