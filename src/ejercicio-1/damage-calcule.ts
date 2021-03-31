
import {TypeEffectCalcule} from "./type-effect-calcule";
import {PokemonFighter} from "./pokemon-fighter";
import {DragonBallFighter} from "./dragon-ball-fighter";
import {Fighter} from "./fighter";

export class DamageCalcule {
  public damage: number;
  constructor(public readonly attacker: Fighter,
              public readonly defender: Fighter) {
    if (attacker instanceof PokemonFighter &&
        defender instanceof PokemonFighter) {
      this.damage = this.pokemonDamage(attacker, defender);
    } else if (attacker instanceof DragonBallFighter &&
        defender instanceof DragonBallFighter) {
      this.damage = this.dbDamage(attacker, defender);
    } else {
      this.damage = this.multiverseDamage(attacker, defender);
    }
  }

  private pokemonDamage(attacker: PokemonFighter,
                        defender: PokemonFighter): number {
    return 50 * (attacker.stats.atk / defender.stats.def) *
           new TypeEffectCalcule(attacker.element,
                                 defender.element).outputEffect;
  }

  private dbDamage(attacker: DragonBallFighter,
                   defender: DragonBallFighter): number {
    let damage: number = 0;
    damage = attacker.pl/defender.pl * (attacker.stats.atk/defender.stats.def);
    if (attacker.race === "Human" && defender.race !== "Human") {
      damage = damage / 2;
    }
    if (attacker.race === "Saiyan" && defender.race === "Human") {
      damage = damage * 3;
    }
    if (attacker.race === "Saiyan" && defender.race === "Android") {
      damage = damage * 2;
    }
    if (attacker.race === "Saiyan" && defender.race === "Other") {
      damage = damage * 1.5;
    }
    if (attacker.race === "Android" && defender.race === "Saiyan") {
      damage = damage / 1.5;
    }
    if (attacker.race === "Android" && defender.race === "Other") {
      damage = damage / 1.2;
    }
    if (attacker.race === "Android" && defender.race === "Human") {
      damage = damage * 1.5;
    }
    if (attacker.race === "Other" && defender.race === "Saiyan") {
      damage = damage / 1.5;
    }
    if (attacker.race === "Other" && defender.race === "Android") {
      damage = damage * 1.2;
    }
    if (attacker.race === "Other" && defender.race === "Human") {
      damage = damage * 2;
    }
    return damage;
  }

  private multiverseDamage(attacker: Fighter, defender: Fighter): number {
    if (attacker.constructor.name === "PokemonFighter" &&
        defender.constructor.name === "DragonBallFighter") {
          return (attacker.stats.atk/defender.stats.def) / 2;
    }
    if (defender.constructor.name === "PokemonFighter" &&
        attacker.constructor.name === "DragonBallFighter") {
      return (attacker.stats.atk/defender.stats.def) * 1.5;
    }
    return (attacker.stats.atk/defender.stats.def);
  }
}
