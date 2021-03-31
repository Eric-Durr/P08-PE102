export type Stats = {
  atk: number,
  def: number,
  spd: number,
  hp: number
}

/**
 * ## Clase Fighter
 * Es una clase abstracta de la que se especificaran
 * el resto de luchadores.  Involucra características clave como:
 * - nombre
 * - altura
 * - peso
 * - genero
 * - estadisticas
 *
 * Además incluye un método a implementar por las clases hijas
 * `toString()`, Que servirá para expresar el objeto en un formato
 * más descriptivo.
 */
export abstract class Fighter {
  constructor(public readonly name: string,
              public readonly height: number,
              public readonly weight: number,
              public readonly gender: "Male" | "Female",
              public stats: Stats) {
  }
  abstract toString(): string;
}
