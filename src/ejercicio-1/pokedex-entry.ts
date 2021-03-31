import {Fighter} from "./fighter";

/**
 * ## Clase de entrada de la pokedex
 * Es un objeto base de los que conforman la pokedex,
 * esta recibe un luchador genérico que servirá para introducir
 * cualquier tipo de luchador específico. La entrada se
 * expresa como una cadena de caracetres que resume sus características
 */
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
