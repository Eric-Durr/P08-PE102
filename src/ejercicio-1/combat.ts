import { Pokemon, PokemonType } from "./pokedex";


export class Combat {
  fighter1: Pokemon;
  fighter2: Pokemon;
  constructor(fighter1: Pokemon, fighter2: Pokemon) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  start(): string {
    let round: number = 0;
    let combatLog: string =
      `COMBAT BETWEEN: ${this.fighter1.name} AND ${this.fighter2.name}`;
    while (this.fighter1.stats.hp > 0 && this.fighter2.stats.hp > 0) {
      round ++;
      combatLog =
      combatLog +
      `\n\n---ROUND: ${round}---\n`+
      `\n${this.fighter1.name} HP: ${this.fighter1.stats.hp}\n` +
      `\n${this.fighter2.name} HP: ${this.fighter2.stats.hp}\n\n`;

      if (this.fighter2.stats.hp > 0) {
        this.fighter2.stats.hp =
            this.fighter2.stats.hp -
            this.damageCalcule(this.fighter1, this.fighter2);
        combatLog =
        combatLog +
        `\n ${this.fighter1.name} attacks ${this.fighter2.name}\n` +
        `\n\t${this.fighter1.name} made `+
        `${this.damageCalcule(this.fighter1, this.fighter2)} damage\n`
        if (this.fighter2.stats.hp <= 0) {
          break;
        }
      }

      if (this.fighter1.stats.hp > 0) {
        this.fighter1.stats.hp =
            this.fighter1.stats.hp -
            this.damageCalcule(this.fighter2, this.fighter1);
            combatLog =
            combatLog +
            `\n ${this.fighter2.name} attacks ${this.fighter1.name}\n` +
            `\n\t${this.fighter2.name} made `+
            `${this.damageCalcule(this.fighter2, this.fighter1)} damage\n`
        if (this.fighter1.stats.hp <= 0) {
            break;
        }
      }
    }
    if (this.fighter2.stats.hp <= 0) {
      combatLog = combatLog + `\n\nWINNER: ${this.fighter1.name}`;
    }
    if (this.fighter1.stats.hp <= 0) {
      combatLog = combatLog + `\n\nWINNER: ${this.fighter2.name}`;
    }
    return combatLog;
  }
  private damageCalcule(pk1: Pokemon, pk2: Pokemon): number {
      let damage: number = 50 * (pk1.stats.atk / pk2.stats.def);

      if (pk1.type == PokemonType.FIRE && pk2.type == PokemonType.GRASS ||
          pk1.type == PokemonType.FIRE && pk2.type == PokemonType.ICE ||
          pk1.type == PokemonType.FIRE && pk2.type == PokemonType.BUG ||
          pk1.type == PokemonType.FIRE && pk2.type == PokemonType.STEEL ||
          pk1.type == PokemonType.WATER && pk2.type == PokemonType.FIRE ||
          pk1.type == PokemonType.WATER && pk2.type == PokemonType.ROCK ||
          pk1.type == PokemonType.WATER && pk2.type == PokemonType.GROUND ||
          pk1.type == PokemonType.ELECTRIC && pk2.type == PokemonType.WATER ||
          pk1.type == PokemonType.ELECTRIC && pk2.type == PokemonType.FLYING ||
          pk1.type == PokemonType.GRASS && pk2.type == PokemonType.WATER ||
          pk1.type == PokemonType.GRASS && pk2.type == PokemonType.GROUND ||
          pk1.type == PokemonType.GRASS && pk2.type == PokemonType.ROCK ||
          pk1.type == PokemonType.PSYCHIC && pk2.type == PokemonType.FIGHTING ||
          pk1.type == PokemonType.PSYCHIC && pk2.type == PokemonType.GROUND
          /* some types are not expressed to enshort the method */) {
        damage = damage * 2;
      }
      if (pk2.type == PokemonType.FIRE && pk1.type == PokemonType.GRASS ||
          pk2.type == PokemonType.FIRE && pk1.type == PokemonType.ICE ||
          pk2.type == PokemonType.FIRE && pk1.type == PokemonType.BUG ||
          pk2.type == PokemonType.FIRE && pk1.type == PokemonType.STEEL ||
          pk2.type == PokemonType.WATER && pk1.type == PokemonType.FIRE ||
          pk2.type == PokemonType.WATER && pk1.type == PokemonType.ROCK ||
          pk2.type == PokemonType.WATER && pk1.type == PokemonType.GROUND ||
          pk2.type == PokemonType.ELECTRIC && pk1.type == PokemonType.WATER ||
          pk2.type == PokemonType.ELECTRIC && pk1.type == PokemonType.FLYING ||
          pk2.type == PokemonType.GRASS && pk1.type == PokemonType.WATER ||
          pk2.type == PokemonType.GRASS && pk1.type == PokemonType.GROUND ||
          pk2.type == PokemonType.GRASS && pk1.type == PokemonType.ROCK ||
          pk2.type == PokemonType.PSYCHIC && pk1.type == PokemonType.FIGHTING ||
          pk2.type == PokemonType.PSYCHIC && pk1.type == PokemonType.GROUND ||
          pk2.type == pk2.type) {
        damage = damage * 0.5;
      }

      return damage;
  }
}

