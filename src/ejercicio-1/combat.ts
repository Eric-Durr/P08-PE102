import {Fighter} from "./fighter";
import {DamageCalcule} from "./damage-calcule";


export class Combat {
  public readonly fighter1: {
    instance: Fighter,
    phrases: string[]};
  public readonly fighter2: {
    instance: Fighter,
    phrases: string[]};
  constructor(instance1: Fighter, phrases1: string[],
              instance2: Fighter, phrases2: string[]) {
    this.fighter1 = {
      instance: instance1,
      phrases: phrases1};
    this.fighter2 = {
      instance: instance2,
      phrases: phrases2};
  }

  start(): string {
    let round: number = 0;
    let combatLog: string =
      `\nCOMBAT BETWEEN: ${this.fighter1.instance.name}`+
      ` AND ${this.fighter2.instance.name}`;
    while (this.fighter1.instance.stats.hp > 0 &&
           this.fighter2.instance.stats.hp > 0) {
      round ++;
      combatLog =
      combatLog +
      `\n\n---ROUND: ${round}---\n`+
      `\n${this.fighter1.instance.name} HP:`+
      ` ${this.fighter1.instance.stats.hp} |` +
      ` ${this.fighter2.instance.name} HP:`+
      ` ${this.fighter2.instance.stats.hp}\n\n`;
      if (this.fighter2.instance.stats.hp > 0) {
        const damageFrom1To2: number =
            Math.floor(new DamageCalcule(this.fighter1.instance,
                              this.fighter2.instance).damage);
        this.fighter2.instance.stats.hp =
            this.fighter2.instance.stats.hp - damageFrom1To2;
        combatLog =
        combatLog +
        `\n${this.fighter1.instance.name} says: `+
        `${this.privateGetRandomPhrase(1)} \n\n`+
        `\n${this.fighter1.instance.name} attacks`+
        ` ${this.fighter2.instance.name}...\n` +
        `\n\t${this.fighter1.instance.name} dealed `+
        `${damageFrom1To2} damage\n\n`;
        if (this.fighter2.instance.stats.hp <= 0) {
          break;
        }
      }

      if (this.fighter1.instance.stats.hp > 0) {
        const damageFrom2To1: number =
        Math.floor(new DamageCalcule(this.fighter2.instance,
                          this.fighter1.instance).damage);
        this.fighter1.instance.stats.hp =
            this.fighter1.instance.stats.hp - damageFrom2To1;
            combatLog =
            combatLog +
            `\n${this.fighter2.instance.name} says: `+
            `${this.privateGetRandomPhrase(2)} \n\n`+
            `\n${this.fighter2.instance.name} attacks`+
            ` ${this.fighter1.instance.name}...\n` +
            `\n\t${this.fighter2.instance.name} dealed `+
            `${damageFrom2To1} damage\n\n`;
        if (this.fighter1.instance.stats.hp <= 0) {
            break;
        }
      }
    }
    if (this.fighter2.instance.stats.hp <= 0) {
      combatLog = combatLog + `\n\nWINNER: ${this.fighter1.instance.name}\n`;
    }
    if (this.fighter1.instance.stats.hp <= 0) {
      combatLog = combatLog + `\n\nWINNER: ${this.fighter2.instance.name}\n`;
    }
    return combatLog;
  }

  privateGetRandomPhrase(fighter: 1 | 2): string {
    return fighter === 1 ?
      this.fighter1.phrases[Math.floor(Math.random() *
                           this.fighter1.phrases.length)] :
      this.fighter2.phrases[Math.floor(Math.random() *
                           this.fighter2.phrases.length)];
  }
}
