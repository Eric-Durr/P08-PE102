import "mocha";
import {expect} from "chai";
import {Stats} from "../../src/ejercicio-1/fighter";
import {PokemonFighter} from "../../src/ejercicio-1/pokemon-fighter";
import {DragonBallFighter} from "../../src/ejercicio-1/dragon-ball-fighter";
import {DamageCalcule} from "../../src/ejercicio-1/damage-calcule";
import {Combat} from "../../src/ejercicio-1/combat";

const vegetaStats: Stats = {
  atk: 55,
  def: 40,
  spd: 80,
  hp: 600};

const vegeta =
new DragonBallFighter("Vegeta", 1.64, 56, "Male",
                      vegetaStats, "Saiyan", 5000);

const satanStats: Stats = {
  atk: 10,
  def: 50,
  spd: 20,
  hp: 600};

const satan =
new DragonBallFighter("Mr.Satan", 1.88, 94, "Male",
                      satanStats, "Saiyan", 10);


const gokuStats: Stats = {
  atk: 150,
  def: 80,
  spd: 80,
  hp: 600};

const goku =
new DragonBallFighter("Goku", 1.72, 70, "Male",
                      gokuStats, "Saiyan", 9001);

const elekidStats: Stats = {
  atk: 60,
  def: 80,
  spd: 10,
  hp: 100};

const elekid =
  new PokemonFighter("Elekid", 0.4, 50, "Female", elekidStats, "Electric");

const blastoiseStats: Stats = {
  atk: 95,
  def: 120,
  spd: 10,
  hp: 100};

const blastoise =
  new PokemonFighter("Blastoise", 2.5, 200, "Male", blastoiseStats, "Water");

const zapdosStats: Stats = {
  atk: 90,
  def: 85,
  spd: 100,
  hp: 90};

const zapdos =
  new PokemonFighter("Zapdos", 1.6, 52.6, "Male", zapdosStats, "Electric");


describe("Combat damage calcule for two fighters - Ex1", ()=>{
  it("Calcule damage for two Pokemon uses the type effect", ()=>{
    expect(new DamageCalcule(blastoise, elekid).damage).to.be.eq(59.375);
    expect(new DamageCalcule(elekid, blastoise).damage).to.be.eq(50);
  });
  it("Calcule damage for two Dragon Ball figters uses the race", ()=>{
    expect(new DamageCalcule(vegeta, satan).damage).to.be.eq(501.1);
    expect(new DamageCalcule(satan, vegeta).damage)
        .to.be.eq(0.252);
  });
  it("Calcule damage for two different fighters uses the origin universe", ()=>{
    expect(new DamageCalcule(blastoise, vegeta).damage)
        .to.be.eq(1.1875);
    expect(new DamageCalcule(vegeta, blastoise).damage).to.be.eq(0.6875);
  });
});

describe("Combat between two fighters outputs the full fight", ()=>{
  it("between two pokemons returns the fight with pokemons noises", ()=>{
    const firstCombat =
    new Combat(blastoise, ["Blast!"], elekid, ["Bzzzzt!"]);
    expect(firstCombat.start()).to.be.eq(
      "\nCOMBAT BETWEEN: Blastoise AND Elekid" +
      "\n\n---ROUND: 1---\n" +
      "\nBlastoise HP: 100 | Elekid HP: 100\n\n" +
      "\nBlastoise says: Blast! \n\n" +
      "\nBlastoise attacks Elekid...\n" +
      "\n\tBlastoise dealed 59 damage\n\n"+
      "\nElekid says: Bzzzzt! \n\n" +
      "\nElekid attacks Blastoise...\n" +
      "\n\tElekid dealed 50 damage\n\n" +
      "\n\n---ROUND: 2---\n" +
      "\nBlastoise HP: 50 | Elekid HP: 41\n\n" +
      "\nBlastoise says: Blast! \n\n" +
      "\nBlastoise attacks Elekid...\n" +
      "\n\tBlastoise dealed 59 damage\n\n"+
      "\n\nWINNER: Blastoise\n");
    const secondCombat =
    new Combat(blastoise, ["Blast!"], zapdos, ["Arctiiic!"]);
    expect(secondCombat.start()).to.be.eq(
      "\nCOMBAT BETWEEN: Blastoise AND Zapdos" +
      "\n\n---ROUND: 1---\n" +
      "\nBlastoise HP: 50 | Zapdos HP: 90\n\n" +
      "\nBlastoise says: Blast! \n\n" +
      "\nBlastoise attacks Zapdos...\n" +
      "\n\tBlastoise dealed 55 damage\n\n" +
      "\nZapdos says: Arctiiic! \n\n" +
      "\nZapdos attacks Blastoise...\n" +
      "\n\tZapdos dealed 75 damage\n\n" +
      "\n\nWINNER: Zapdos\n");
  });
  it("between two dragon ball foghters returns"+
     "the fight with catch phrases", ()=>{
    const firstCombat =
    new Combat(vegeta,
               ["That's MY BULMA!!!", /*
                "Trunks, Bulma... I Do This For You.",
                "I'LL EAT YOUR WHOLE RACE!",
                "WELCOME TO THE END OF YOUR LIFE,"+
                " AND I PROMISE, IT'S GOING TO HURT",
                "WHO'S FACE IS UGLY?" */],
               satan,
               ["his was all just a cheap trick", /*
                " from a martial arts standpoint, he's an amateur",
                "i'd like to give my condolences",
                "Uh...well...he's probably just one of my fanatical fans",
                "Uh...not bad. Ha ha ha ha ha" */]);
    expect(firstCombat.start()).to.be.eq(
      "\nCOMBAT BETWEEN: Vegeta AND Mr.Satan" +
      "\n\n---ROUND: 1---\n" +
      "\nVegeta HP: 600 | Mr.Satan HP: 600\n\n" +
      "\nVegeta says: That's MY BULMA!!! \n\n" +
      "\nVegeta attacks Mr.Satan...\n" +
      "\n\tVegeta dealed 501 damage\n\n"+
      "\nMr.Satan says: his was all just a cheap trick \n\n" +
      "\nMr.Satan attacks Vegeta...\n" +
      "\n\tMr.Satan dealed 0 damage\n\n" +
      "\n\n---ROUND: 2---\n" +
      "\nVegeta HP: 600 | Mr.Satan HP: 99\n\n" +
      "\nVegeta says: That's MY BULMA!!! \n\n" +
      "\nVegeta attacks Mr.Satan...\n" +
      "\n\tVegeta dealed 501 damage\n\n"+
      "\n\nWINNER: Vegeta\n");
    // const secondCombat =
    // new Combat(vegeta,
    //           ["That's MY BULMA!!!", /*
    //           "Trunks, Bulma... I Do This For You.",
    //           "I'LL EAT YOUR WHOLE RACE!",
    //           "WELCOME TO THE END OF YOUR LIFE,"+
    //           " AND I PROMISE, IT'S GOING TO HURT",
    //           "WHO'S FACE IS UGLY?" */],
    //           goku,
    //           ["Bring it on!", /*
    //            "Fine, I'll take care of this.",
    //            "Is it time for a rematch?",
    //            "Vegeta, you never grow up!",
    //            "You're looking better than usual today.",
    //            "Go away. You annoy me." */]);
    // expect(secondCombat.start()).to.be.eq(
    //   "\nCOMBAT BETWEEN: Zapdos AND Blastoise" +
    //   // very long combat
    //   "\n\nWINNER: Goku\n");
  });
});
