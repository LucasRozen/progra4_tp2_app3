# Documentación

## Consigna

Estoy aprendiendo JavaScript porque me contaron que es un lenguaje muy seguro. Amo el null y ahora encima tengo undefined!

Pero abrir la consola de Chrome o usar node para ejecutar mi código es molesto. Quiero una aplicación web que lo haga mas fácilmente.

Me gustaría que me deje meter todo el código que yo quiera y al apretar un botón, lo ejecute.

Para cuando hagan el frontend: pueden usar un gran cuadro de texto para el código, pero a la larga es molesto incluso para ustedes a la hora de testear.

Así que también podrían tener su propio Visual Studio Code metido dentro de su aplicación web usando el Mónaco Editor: <https://github.com/microsoft/monaco-editor>

Las aplicaciones que voy a escribir ahí son de consola. Así que toda forma de mostrarle algo al mundo va a ser mostrando texto en consola. Claramente, necesito ver ese texto. Pero no en la consola de Chrome, es molesto. En cambio, quiero que todo lo que mi código escribe se muestre ahí mismo, en la web de la aplicación.

Optativa 1
Necesito que todo código que ejecuto se guarde en algún lado, de alguna manera. Así puedo fácilmente volver a abrir un código antiguo para editarlo y volver a ejecutarlo.

## Explicación del problema

- El cliente quiere una aplicación que le deje escribir código Javascript, ejecutarlo con un botón y que el resultado salga por consola.
- Además quiere que cada vez que ejecute su código este se guarde y que pueda volver a él después de haber seguido codeando. O sea que pueda volver a las distintas versiones que se vayan guardando y seguir trabajando con ellas.

## Investigación

### ¿Qué es un editor de código?

Un editor de código es una herramienta de software diseñada para facilitar la escritura y edición de código fuente de programas. Por ejemplo: Visual Studio Code, Sublime Text y Atom.

### ¿Qué es Mónaco Editor? ¿Cómo funciona? ¿Para qué nos sirve en nuestro proyecto?

Monaco Editor es una librería que te permite colocar un editor de código en tu aplicación web. Funciona perfecto con React y Next.js.

Decidimos utilizar mónaco editor, ya que, esta página lo cataloga como el mejor entre la competencia: (<https://npmtrends.com/ace-code-editor-vs-codeflask-vs-codejar-vs-codemirror-vs-monaco-editor>)

Codejar también nos parece una buena opción, nos definimos por Monaco Editor porque había más documentación.

Este documento explica el paso a paso para usar Monaco Editor: [Tutorial Monaco Editor]
[Tutorial Monaco Editor]: <https://docs.google.com/document/d/1f-F-Xr3h_KwFhkJ9zkPb78bRysInKhrQiqzBDUR5ox8/edit?usp=sharing>
En este tutorial se menciona que *para poder ejecutar el código que escribe el usuario, van a tener que usar un motor de ejecución de javascript y así obtener el resultado y poder manejarlo*. Esto se encuentra en el punto cuatro de la documentación -> `4. Ejecución`.

## Decisiones de Modelado

### Entidades

- `Codigo`: Es la entidad que va a tener el código que escriba el usuario y la fecha en la cual se ejecutó. La fecha se utiliza para poder identificar las versiones del código.
- `VersionesDeCodigo`: Va a ser el listado de las distintas versiones del `Codigo` que vaya ejecutando el usuario.
- `EditorDeCodigo`: Va a ser el contenedor donde el usuario escriba el `Codigo`. Acá van a tener las propiedades que sirvan del objeto que les devuelva Monaco Editor, así solo se quedan con los datos necesarios.

### Relaciones

- **VersionesDeCodigo** tiene muchos **Codigo**s
- **EditorDeCodigo** tiene un **Codigo**

### Reglas

- El código que escriba el usuario tiene que ser código **Javascript**
- El código que escriba el usuario debe ejecutarse con un **botón**
- El resultado de la ejecución del código debe aparecer en **consola**

### Métodos que expone el modelo

Nos pareció que `Codigo` necesitaba acciones de:

- **Creación:** Al ejecutar el código, se genera una nueva versión.
- **Modificación:** Al volver a una versión anterior del código, el usuario debe poder editarla.

Decidimos que `VersionesDeCodigo` necesitaba acciones de:

- **Consulta:** Acá el usuario consulta TODAS las versiones del código, necesitamos esta acción para que el usuario pueda tener una vista general de todas las versiones y así poder elegir una.

Decidimos que `EditorDeCodigo` necesitaba acciones de:

- **Creación:** Al inicio de la aplicación se debe crear un nuevo editor de código.
- **Consulta:** Acá el usuario consulta el editor de codigo con su valor (código) actual.

### Notas

- No necesitamos la acción ConsultarCodigo ya que cuando se consulta el listado de versiones de código ya se están trayendo la fecha y el valor de cada uno, entonces cuando se elije uno de ellos, el valor ya está disponible para ser mostrado dentro del editor y por lo tanto no hace falta consultarlo a la base de datos.
- En la función `ModificarCodigo` se sobreescribe el código en la base de datos con la fecha en la cual el código fue modificado.
