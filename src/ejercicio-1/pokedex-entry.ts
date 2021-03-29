import {Fighter} from "./fighter";

export class PokedexEntry {
  public readonly entry: string;
  constructor(intro: Fighter) {
    this.entry = `${intro.name} |`+
                 ` H: ${intro.height}m |`+
                 ` W: ${intro.weight}kg |`+
                 ` G: `+ (intro.gender === "Male" ? `♂` : `♀`);
  }
}
