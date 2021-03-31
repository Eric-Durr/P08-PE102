import {Fighter, Stats} from "./fighter";

export type PokemonType = "Normal" | "Fire" | "Water" | "Grass" | "Poison" |
                          "Electric" | "Ice" | "Fighting" | "Ground" |
                           "Flying" |"Psychic" | "Bug" | "Rock" | "Ghost" |
                           "Dark" | "Dragon" | "Steel" | "Fairy";

/**
 * ## Clase PokemonFighter
 * Es una especificación de la clase abstracta Fighter y,
 * a parte de los atributos base, especifica el atributo element
 * que no es otra cosa que el tipo de pokemon, esto se usa al resolver
 * el daño de combate.
 */
export class PokemonFighter extends Fighter {
  constructor(name: string, height: number, weight: number,
              gender: "Male" | "Female", stats: Stats,
              public readonly element: PokemonType = "Normal") {
    super(name, height, weight, gender, stats);
  }
  toString() {
    return `Name: ${this.name}\nHeight: ${this.height} m`+
           `\nWeight: ${this.weight} Kg`+
           `\nGender: ${this.gender}`+
           `\nStats:\n\tAttak: ${this.stats.atk}`+
           `\n\tDeffense: ${this.stats.def}`+
           `\n\tSpeed: ${this.stats.spd}`+
           `\n\tHP: ${this.stats.hp}\n`+
           `Type: ${this.element}`;
  }
};
