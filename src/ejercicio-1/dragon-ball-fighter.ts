import {Fighter, Stats} from "./fighter";


export type RaceType = "Human" | "Special" /* all non human but biological */ |
                       "Android";

/* Features
  - Fighter race (Human, Saiyan, Namekian, ...)
  - Fighter PowerLevel
*/

export class DragonBallFighter extends Fighter {
  constructor(name: string, height: number, weight: number, stats: Stats,
              public readonly race: RaceType = "Human",
              public readonly pl: number = 1) {
    super(name, height, weight, stats);
  }
  toString() {
    return `Name: ${this.name}\nHeight: ${this.height} m`+
           `\nWeight: ${this.weight} Kg\n`+
           `Stats:\n\tAttak: ${this.stats.atk}`+
           `\n\tDeffense: ${this.stats.def}`+
           `\n\tSpeed: ${this.stats.spd}`+
           `\n\tHP: ${this.stats.hp}\n`+
           `Race: ${this.race}`+
           `Power Level: ${this.pl}`;
  }
};
