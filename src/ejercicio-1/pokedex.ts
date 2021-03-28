type PokemonType = "Normal" | "Fire" | "Water" | "Grass" | "Poison" |
                   "Electric" | "Ice" | "Fighting" | "Ground" | "Flying" |
                   "Psychic" | "Bug" | "Rock" | "Ghost" | "Dark" | "Dragon" |
                   "Steel" | "Fairy";

/*
  export class Pokedex {
  pokeList: Pokemon[];
  maxSlots: number;
  constructor(maxSlots: number, inputList?: Pokemon[]) {
    this.maxSlots = maxSlots;
     if (typeof inputList === "undefined") {
      this.pokeList = [];
    } else {
      this.pokeList = inputList;
    }
  }
  knownPokemon(): number {
    return this.pokeList.length;
  }
  unknownPokemon(): number {
    return this.maxSlots - this.pokeList.length;
  }
  totalSlots(): number {
    return this.maxSlots;
  }
  toString(): string {
    return this.pokeList.length === 0 ?
    "--no known pokemon yet--" :
    this.listToString();
  }
  private listToString(): string {
    let output = "";
    this.pokeList.forEach((pokemon, i)=> {
      output = output + `${i+1}--${pokemon.name}\n`;
      output = output + `\tHP: ${pokemon.stats.hp}\n`;
      output = output + `\tAttak: ${pokemon.stats.atk}\n`;
      output = output + `\tDefense: ${pokemon.stats.def}\n`;
      output = output + `\tSpeed: ${pokemon.stats.spd}\n`;
      output = output + `\tWeight: ${pokemon.weight}\n`; 
    });
    return output;
  }
  scanPokemon(newPokemon: Pokemon): void {
    this.pokeList.push(newPokemon);
  }
}
*/
