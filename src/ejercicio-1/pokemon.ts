import {Fighter, Stats} from "./fighter";

export type PokemonType = "Normal" | "Fire" | "Water" | "Grass" | "Poison" |
                          "Electric" | "Ice" | "Fighting" | "Ground" |
                           "Flying" |"Psychic" | "Bug" | "Rock" | "Ghost" |
                           "Dark" | "Dragon" | "Steel" | "Fairy";

export class Pokemon extends Fighter {
  constructor(name: string, height: number, weight: number, stats: Stats,
              public readonly element: PokemonType = "Normal") {
    super(name, height, weight, stats);
  }
  toString() {
    return `Name: ${this.name}\nHeight: ${this.height} m`+
           `\nWeight: ${this.weight} Kg\n`+
           `Stats:\n\tAttak: ${this.stats.atk}`+
           `\n\tDeffense: ${this.stats.def}`+
           `\n\tSpeed: ${this.stats.spd}`+
           `\n\tHP: ${this.stats.hp}\n`+
           `Type: ${this.element}`;
  }
};
