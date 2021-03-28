import {PokemonType} from "./pokemon-fighter";

export class TypeEffectCalcule {
  public readonly outputEffect: 0.5 | 2 | 1 | 0
  constructor(public readonly thisFighterType: PokemonType,
              public readonly otherFighterType: PokemonType) {
    this.outputEffect = this.comparePokemonTypes();
  }

  private comparePokemonTypes(): 0.5 | 2 | 1 | 0 {
    /* Advantage cases */
    if (this.thisFighterType === "Fire" && this.otherFighterType === "Grass" ||
    this.thisFighterType === "Fire" && this.otherFighterType === "Ice" ||
    this.thisFighterType === "Fire" && this.otherFighterType === "Bug" ||
    this.thisFighterType === "Fire" && this.otherFighterType === "Steel" ||
    this.thisFighterType === "Water" && this.otherFighterType === "Fire" ||
    this.thisFighterType === "Water" && this.otherFighterType === "Ground" ||
    this.thisFighterType === "Water" && this.otherFighterType === "Rock" ||
    this.thisFighterType === "Electric" && this.otherFighterType === "Water" ||
    this.thisFighterType === "Electric" && this.otherFighterType === "Flying" ||
    this.thisFighterType === "Grass" && this.otherFighterType === "Water" ||
    this.thisFighterType === "Grass" && this.otherFighterType === "Ground" ||
    this.thisFighterType === "Grass" && this.otherFighterType === "Rock" ||
    this.thisFighterType === "Ice" && this.otherFighterType === "Grass" ||
    this.thisFighterType === "Ice" && this.otherFighterType === "Ground" ||
    this.thisFighterType === "Ice" && this.otherFighterType === "Flying" ||
    this.thisFighterType === "Ice" && this.otherFighterType === "Dragon" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Normal" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Ice" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Rock" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Dark" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Steel" ||
    this.thisFighterType === "Poison" && this.otherFighterType === "Grass" ||
    this.thisFighterType === "Poison" && this.otherFighterType === "Fairy" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Fire" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Electric" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Poison" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Rock" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Steel" ||
    this.thisFighterType === "Flying" && this.otherFighterType === "Grass" ||
    this.thisFighterType === "Flying" && this.otherFighterType === "Fighting" ||
    this.thisFighterType === "Flying" && this.otherFighterType === "Bug" ||
    this.thisFighterType === "Psychic" &&
    this.otherFighterType === "Fighting" ||
    this.thisFighterType === "Psychic" && this.otherFighterType === "Poison" ||
    this.thisFighterType === "Bug" && this.otherFighterType === "Grass" ||
    this.thisFighterType === "Bug" && this.otherFighterType === "Psychic" ||
    this.thisFighterType === "Bug" && this.otherFighterType === "Dark" ||
    this.thisFighterType === "Rock" && this.otherFighterType === "Fire" ||
    this.thisFighterType === "Rock" && this.otherFighterType === "Ice" ||
    this.thisFighterType === "Rock" && this.otherFighterType === "Flying" ||
    this.thisFighterType === "Rock" && this.otherFighterType === "Bug" ||
    this.thisFighterType === "Ghost" && this.otherFighterType === "Psychic" ||
    this.thisFighterType === "Ghost" && this.otherFighterType === "Ghost" ||
    this.thisFighterType === "Dragon" && this.otherFighterType === "Dragon" ||
    this.thisFighterType === "Dark" && this.otherFighterType === "Psychic" ||
    this.thisFighterType === "Dark" && this.otherFighterType === "Ghost" ||
    this.thisFighterType === "Steel" && this.otherFighterType === "Ice" ||
    this.thisFighterType === "Steel" && this.otherFighterType === "Rock" ||
    this.thisFighterType === "Steel" && this.otherFighterType === "Fairy" ||
    this.thisFighterType === "Fairy" && this.otherFighterType === "Fighting" ||
    this.thisFighterType === "Fairy" && this.otherFighterType === "Dragon" ||
    this.thisFighterType === "Fairy" && this.otherFighterType === "Dark") {
      return 2;
    }

    /* Disadvantages cases */
    if ((this.thisFighterType === this.otherFighterType &&
      (this.otherFighterType !== "Ghost" &&
      this.otherFighterType !== "Fighting" &&
      this.otherFighterType !== "Normal" &&
      this.otherFighterType !== "Ground" &&
      this.otherFighterType !== "Flying" &&
      this.otherFighterType !== "Bug" &&
      this.otherFighterType !== "Rock" &&
      this.otherFighterType !== "Fairy")) ||
      this.thisFighterType === "Normal" && this.otherFighterType === "Rock" ||
      this.thisFighterType === "Normal" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Fire" && this.otherFighterType === "Water" ||
      this.thisFighterType === "Fire" && this.otherFighterType === "Rock" ||
      this.thisFighterType === "Fire" && this.otherFighterType === "Dragon" ||
      this.thisFighterType === "Water" && this.otherFighterType === "Grass" ||
      this.thisFighterType === "Water" && this.otherFighterType === "Dragon" ||
      this.thisFighterType === "Electric" &&
      this.otherFighterType === "Grass" ||
      this.thisFighterType === "Electric" &&
      this.otherFighterType === "Dragon" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Fire" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Poison" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Flying" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Bug" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Dragon" ||
      this.thisFighterType === "Grass" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Ice" && this.otherFighterType === "Fire" ||
      this.thisFighterType === "Ice" && this.otherFighterType === "Water" ||
      this.thisFighterType === "Ice" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Fighting" &&
      this.otherFighterType === "Poison" ||
      this.thisFighterType === "Fighting" &&
      this.otherFighterType === "Flying" ||
      this.thisFighterType === "Fighting" &&
      this.otherFighterType === "Psychic" ||
      this.thisFighterType === "Fighting" &&
      this.otherFighterType === "Bug" ||
      this.thisFighterType === "Fighting" &&
      this.otherFighterType === "Fairy" ||
      this.thisFighterType === "Poison" && this.otherFighterType === "Ground" ||
      this.thisFighterType === "Poison" && this.otherFighterType === "Rock" ||
      this.thisFighterType === "Poison" && this.otherFighterType === "Ghost" ||
      this.thisFighterType === "Ground" && this.otherFighterType === "Grass" ||
      this.thisFighterType === "Ground" && this.otherFighterType === "Bug" ||
      this.thisFighterType === "Flying" &&
      this.otherFighterType === "Electric" ||
      this.thisFighterType === "Flying" && this.otherFighterType === "Rock" ||
      this.thisFighterType === "Flying" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Psychic" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Fire" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Fighting" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Poison" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Flying" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Ghost" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Bug" && this.otherFighterType === "Fairy" ||
      this.thisFighterType === "Rock" && this.otherFighterType === "Fighting" ||
      this.thisFighterType === "Rock" && this.otherFighterType === "Ground" ||
      this.thisFighterType === "Rock" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Ghost" && this.otherFighterType === "Dark" ||
      this.thisFighterType === "Dragon" && this.otherFighterType === "Steel" ||
      this.thisFighterType === "Dark" && this.otherFighterType === "Fighting" ||
      this.thisFighterType === "Dark" && this.otherFighterType === "Fairy" ||
      this.thisFighterType === "Steel" && this.otherFighterType === "Fire" ||
      this.thisFighterType === "Steel" && this.otherFighterType === "Water" ||
      this.thisFighterType === "Steel" &&
      this.otherFighterType === "Electric" ||
      this.thisFighterType === "Fairy" && this.otherFighterType === "Fire" ||
      this.thisFighterType === "Fairy" && this.otherFighterType === "Poison" ||
      this.thisFighterType === "Fairy" && this.otherFighterType === "Steel" ) {
      return 0.5;
    }
    /* No effect cases */
    if (this.thisFighterType === "Normal" &&
        this.otherFighterType === "Ghost" ||
    this.thisFighterType === "Electric" && this.otherFighterType === "Ground" ||
    this.thisFighterType === "Fighting" && this.otherFighterType === "Ghost" ||
    this.thisFighterType === "Poison" && this.otherFighterType === "Steel" ||
    this.thisFighterType === "Ground" && this.otherFighterType === "Flying" ||
    this.thisFighterType === "Psychic" && this.otherFighterType === "Dark" ||
    this.thisFighterType === "Ghost" && this.otherFighterType === "Normal" ||
    this.thisFighterType === "Dragon" && this.otherFighterType === "Fairy") {
      return 0;
    }
    return 1;
  }
}
