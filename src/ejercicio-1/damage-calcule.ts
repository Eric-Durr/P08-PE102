
import {TypeEffectCalcule} from "./type-effect-calcule";
import {PokemonFighter} from "./pokemon-fighter";
import {DragonBallFighter} from "./dragon-ball-fighter";
import {Fighter} from "./fighter";

/**
 * ## Clase DamageCalcule
 * En esta clase se lleva a cabo toda la lógica de resolución
 * de daño entre dos oponentes, se distingue entre el atacante
 * y el defensor, ambos pueden pertenecer a cualquier instancia
 * derivada de la clase Fighter.
 *
 * Esta clase presenta unicamente el atributo del daño resultante
 * que se inicializará con un valor u otro dependiendo el caso
 * registrado en base a la instancia de ambos contricantes.
 *
 * Para cada caso existe un método de resolución:
 * - pokemonDamage(): Ambos contrincantes son del universo Pokemon y
 *  hacen uso del cálculo en base al elemento
 *
 * - dbDamage(): Ambos luchadores pertenecen al universo de Dragon Ball
 *  y se basan en las características de este tipo de oponente
 *
 * - multiverseDamage(): Los contrincantes son de universos distintos y se
 *  debe basar en el origen de cada uno.
 *
 * Esta clase es facilmente escalable donde solo se deberá añadir una condición
 * por universo contemplado y una ligera modificación en el método para
 * oponentes de distintos universos.
 *
 * Se ha optado por encapsular toda esta lógica en una sola clase que hace de
 * interfaz.
 */

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
    damage = attacker.pl/defender.pl + (attacker.stats.atk/defender.stats.def);
    return damage;
  }

  private multiverseDamage(attacker: Fighter, defender: Fighter): number {
    if (attacker.constructor.name === "PokemonFighter" &&
        defender.constructor.name === "DragonBallFighter") {
          return (attacker.stats.atk/defender.stats.def) / 2;
    } else if (defender.constructor.name === "PokemonFighter" &&
        attacker.constructor.name === "DragonBallFighter") {
      return (attacker.stats.atk/defender.stats.def) * 1.5;
    } else {
      return (attacker.stats.atk/defender.stats.def);
    }
  }
}
