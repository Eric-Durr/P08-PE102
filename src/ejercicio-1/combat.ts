/* import { Pokemon, PokemonType } from "./pokedex";


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
  private damageCalcule(): void {
  }
}
 */
