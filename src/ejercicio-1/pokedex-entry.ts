import {Fighter} from "./fighter";

export class PokedexEntry {
  public readonly entry: string;
  constructor(public readonly instance: Fighter) {
    this.entry =`${instance.constructor.name.split(/(?=[A-Z])/).join(" ")} |`+
                ` ${instance.name} |`+
                ` H: ${instance.height}m |`+
                ` W: ${instance.weight}kg |`+
                ` G: `+ (instance.gender === "Male" ? `♂` : `♀`);
  }
}
