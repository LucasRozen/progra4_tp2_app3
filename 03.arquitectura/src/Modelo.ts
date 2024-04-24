export interface VersionDeCodigo {
  codigo: string;
  fecha: Date;
}

export interface VersionesDeCodigo {
  versiones: VersionDeCodigo[];
}

export interface EditorDeCodigo {
  codigo: string;
  /*acá van todas las propiedades que traiga la librería Monaco Editor
  que consideren necesarias para la aplicación*/
}

export function AgregarCodigo(codigo: string): Codigo {
  //Agrega una versión del código a la base de datos
}

export function ConsultarVersionesDeCodigo(): VersionesDeCodigo {
  /*Arma un listado que contiene todas las
    versiones del código en la base de datos*/
}

export function CrearEditorDeCodigo(): void {
  //Logica proporcionada por Monaco Editor para crear un editor de codigo
}

export function TraerEditorDeCodigo(): EditorDeCodigo {
  //Logica para consultar el codigo actual del editor en la base de datos
}

export function EjecutarCodigo(codigo: string): void{
  /*Logica para ejecutar el codigo (con ayuda de un 
    motor de ejecución de Javascript) y mostrarlo*/
}