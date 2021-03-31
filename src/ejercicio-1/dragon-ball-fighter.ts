import {Fighter, Stats} from "./fighter";


export type RaceType = "Human" | "Other" /* all non human but biological */ |
                       "Android" | "Saiyan";

/**
 * ## Clase DragonBallFighter
 * Es una especificación de la clase abstracta Fighter y,
 * a parte de los atributos base, especifica los atributos:
 * - race: Para especificar el origen del luchador
 * - pl: Para especificar el nivel de poder
 *
 * A parte de la implementación del metodo toString
 * también se crea un método para subir de nivel como es
 * típico en este universo.
 */
export class DragonBallFighter extends Fighter {
  constructor(name: string, height: number, weight: number,
              gender: "Male" | "Female", stats: Stats,
              public readonly race: RaceType = "Human",
              public pl: number = 1) {
    super(name, height, weight, gender, stats);
  }
  toString() {
    return `Name: ${this.name}\nHeight: ${this.height} m`+
           `\nWeight: ${this.weight} Kg`+
           `\nGender: ${this.gender}`+
           `\nStats:\n\tAttak: ${this.stats.atk}`+
           `\n\tDeffense: ${this.stats.def}`+
           `\n\tSpeed: ${this.stats.spd}`+
           `\n\tHP: ${this.stats.hp}`+
           `\nRace: ${this.race}`+
           `\nPower Level: ${this.pl}`;
  }
  increaseLevel(next: number): void {
    this.pl = this.pl + (this.pl * next * this.stats.atk);
  }
};
