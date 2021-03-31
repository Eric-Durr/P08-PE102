import {PokedexEntry} from "./pokedex-entry";


/**
 * # Clase Pokedex
 *
 * La clase pokedex se define por una lista de objetos de tipo PopkedexEntry
 * y a su vez el número máximo de casillas que tiene para completar con
 * luchadores. También se usan atributos para expresar los ya conocidos y el
 * número restante de casillas.
 *
 * Cabe destacar que se emplea un tipo Set para contener todas las entradas de
 * la Pokedex, ya que se supone que todos son únicos. Los métodos también se
 * han deesarrollado para satisfacer esta condición.
 *
 * Esta clase, como viene siendo habitual permite el escaneo dee nuevos
 * luchadores así como su borrado, afectando esto a los huecos libres y
 * ocupados.
 */

export class Pokedex {
elements: Set<PokedexEntry> ;
maxSlots: number;
knownFighters: number;
unknownFighters: number;
constructor(maxSlots: number = 0, ...elements: PokedexEntry[]) {
  this.maxSlots = maxSlots;
    if (elements.length === 0) {
      this.elements = new Set;
    } else {
      this.elements = new Set(elements);
    }
    this.knownFighters = elements.length;
    this.unknownFighters = this.maxSlots - elements.length;
  }
  upgradeSlots(increment: number): void {
    this.maxSlots = this.maxSlots + increment;
    this.unknownFighters = this.maxSlots - this.knownFighters;
  }

  getFighter(name: string): PokedexEntry | undefined {
    return [...this.elements.values()]
        .find((entry) =>entry.instance.name === name);
  }

  scanFighters(...newEntries: PokedexEntry[]): boolean {
    if ((this.knownFighters + newEntries.length) <= this.maxSlots) {
      const before: number = this.knownFighters;
        newEntries.forEach((entry)=> {
          const fighter: PokedexEntry | undefined =
              this.getFighter(entry.instance.name);
          if (typeof fighter === "undefined") {
            this.elements.add(entry);
            this.knownFighters ++;
            this.unknownFighters --;
          }
        });
        return before !== this.knownFighters;
    } else {
      return false;
    }
  }
  removeFighter(name: string): boolean {
    const fighter: PokedexEntry | undefined = this.getFighter(name);
    if (typeof fighter !== "undefined") {
      const before: number = this.knownFighters;
      this.elements.delete(fighter);
      this.knownFighters = this.elements.size;
      this.unknownFighters ++;
      return this.knownFighters !== before;
    } else {
      return false;
    }
  }
}

/**
 * ## Clasee de impresión de la pokedex
 * Esta clase surge del principio SOLID de Single responsibility,
 * se encarga de generar una cadena de caracteres a partir de la pokedex,
 * dentro se añade a la salida de todas las entradas; el universo de origen
 * y el estado de huecos de la pokedex
 */
export class PokedexOutput {
  constructor(public readonly pokedex: Pokedex) {}
  print(): string {
    let output: string = "\n==== POKEDEX STATUS OUTPUT ====\n";
      output = output +
               `SLOTS: ${this.pokedex.knownFighters}/${this.pokedex.maxSlots}`+
               ` -- ${this.pokedex.unknownFighters} free spaces\n`;
      this.pokedex.elements.size === 0 ?
        output = output + "--no registered fighters yet--\n" :
        output = output + this.listToString();
      return output;
    }
  private listToString(): string {
    let output = "";
    let i = 1;
    this.pokedex.elements.forEach((fighter)=> {
      output = output + `\t${i} | ` + fighter.entry + "\n";
      i++;
    });
    return output;
  }
}

