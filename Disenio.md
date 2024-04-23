# Documentación

## Consigna

Estoy aprendiendo JavaScript porque me contaron que es un lenguaje muy seguro. Amo el null y ahora encima tengo undefined!

Pero abrir la consola de Chrome o usar node para ejecutar mi código es molesto. Quiero una aplicación web que lo haga mas fácilmente.

Me gustaría que me deje meter todo el código que yo quiera y al apretar un botón, lo ejecute.

Para cuando hagan el frontend: pueden usar un gran cuadro de texto para el código, pero a la larga es molesto incluso para ustedes a la hora de testear.

Así que también podrían tener su propio Visual Studio Code metido dentro de su aplicación web usando el Mónaco Editor: https://github.com/microsoft/monaco-editor

Las aplicaciones que voy a escribir ahí son de consola. Así que toda forma de mostrarle algo al mundo va a ser mostrando texto en consola. Claramente, necesito ver ese texto. Pero no en la consola de Chrome, es molesto. En cambio, quiero que todo lo que mi código escribe se muestre ahí mismo, en la web de la aplicación.

Optativa 1
Necesito que todo código que ejecuto se guarde en algún lado, de alguna manera. Así puedo fácilmente volver a abrir un código antiguo para editarlo y volver a ejecutarlo.

## Investigación

### ¿Qué es un editor de código?
Un editor de código es una herramienta de software diseñada para facilitar la escritura y edición de código fuente de programas. Por ejemplo: Visual Studio Code, Sublime Text y Atom.

### ¿Qué es Mónaco Editor? ¿Cómo funciona? ¿Para qué nos sirve en nuestro proyecto?
Monaco Editor es una librería que te permite colocar un editor de código en tu aplicación web. Funciona perfecto con React y Next.js.

Decidimos utilizar mónaco editor, ya que, esta página lo cataloga como el mejor entre la competencia: ace-code-editor vs codeflask vs codejar vs codemirror vs monaco-editor | npm trends

Codejar también nos parece una buena opción, nos definimos por Monaco Editor porque había más documentación.

Este documento explica el paso a paso para usar Monaco Editor: [text][Tutorial Monaco Editor]

## Decisiones de Modelado

- `Codigo` que va a ser el código que escriba el usuario.
- `VersionesDeCodigo` que van a ser las distintas versiones de `Codigo` que vaya ejecutando el usuario
- `EditorDeCodigo` que va a ser el contenedor donde el usuario escriba el `Codigo`
- `ResultadoDeCodigo` que va a ser lo que se muestre como resultado de la ejecución de `Codigo`

[Tutorial Monaco Editor]: https://docs.google.com/document/d/1f-F-Xr3h_KwFhkJ9zkPb78bRysInKhrQiqzBDUR5ox8/edit?usp=sharing