import {PokedexEntry} from "./pokedex-entry";

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

