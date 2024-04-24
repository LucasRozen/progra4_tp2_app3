/*export type Cocinero = string;
export type Piso = { cocinero1: Cocinero, cocinero2: Cocinero };
export type Torta = { nombre: string, piso1: Piso, piso2: Piso, piso3: Piso };
export type Plan = { tortas: Torta[] };

export function crearPlan(cocineros: Cocinero[], nombresTortas: string[], semilla: number): Plan {
    // TODO: verificar que las cantidades de tortas y cocineros tenga sentido o tirar error
    // TODO: verificar que las tortas no repiten nombre
    // TODO: verificar que hay cantidad par de cocineros

    console.log(`Comenzando el armado del plan`);

    console.log(`Tortas`);
    console.log(nombresTortas);

    cocineros = mezclar(cocineros, semilla);
    console.log(`Cocineros mezclados:`);
    console.log(cocineros);

    var tortas: Torta[] = [];

    for (let t = 0; t < nombresTortas.length; t++) {
        const nombreTorta = nombresTortas[t];

        const torta = {
            nombre: nombreTorta,
            piso1: armarPiso(cocineros, 1),
            piso2: armarPiso(cocineros, 2),
            piso3: armarPiso(cocineros, 3),
        }
        tortas.push(torta);

        cocineros = desplazarCocineros(cocineros);
    }

    const plan = { tortas };
    return plan;
}*/

export interface Codigo {
  valor: string;
  fecha: Date;
}

export interface VersionesDeCodigo {
  versiones: Codigo[];
}

export interface EditorDeCodigo {
  codigo: string;
  /*acá van todas las propiedades que traiga la librería Monaco Editor
  que consideren necesarias para la aplicación*/
}

export function AgregarCodigo(codigo: string): Codigo {
  //Agrega una versión del código a la base de datos
}

export function ModificarCodigo(codigo: string): Codigo {
  //Sobreescribe el código en la base de datos con su nueva fecha
}

export function ConsultarVersionesDeCodigo(): VersionesDeCodigo {
  /*Arma un listado que contiene todas las
    versiones del código en la base de datos*/
}

export function CrearEditorDeCodigo(): EditorDeCodigo {
  //Logica proporcionada por Monaco Editor para crear un editor de codigo
}

export function ConsultarEditorDeCodigo(): EditorDeCodigo {
  //Logica para consultar el codigo actual del editor en la base de datos
}
