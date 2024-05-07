export interface VersionDeCodigo {
  codigo: string;
  fecha: Date;
}

export interface VersionesDeCodigo {
  versiones: VersionDeCodigo[];
}

export interface EditorDeCodigo {
  codigo: string;
}

export interface ResultadoDeCodigo{
  resultado: string;
}

export function AgregarCodigo(codigo: string): Void {
  //Agrega una versión del código a la base de datos
}

export function EjecutarCodigo(codigo: string): string{
  //Lógica para ejecutar el código y devolver el resultado
}

export function ConsultarVersionesDeCodigo(): VersionesDeCodigo {
  /*Arma un listado que contiene todas las
    versiones del código en la base de datos*/
}

export function CrearEditorDeCodigo(): void {
  //Lógica proporcionada por Monaco Editor para crear un editor de código
}

export function TraerEditorDeCodigo(): EditorDeCodigo {
  //Logica para consultar el código actual del editor en la base de datos
}