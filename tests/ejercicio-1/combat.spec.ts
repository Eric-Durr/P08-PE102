import "mocha";
import {expect} from "chai";
import {Stats} from "../../src/ejercicio-1/fighter";
import {PokemonFighter} from "../../src/ejercicio-1/pokemon-fighter";
import {DragonBallFighter} from "../../src/ejercicio-1/dragon-ball-fighter";
import {DamageCalcule} from "../../src/ejercicio-1/damage-calcule";

const vegetaStats: Stats = {
  atk: 20,
  def: 150,
  spd: 80,
  hp: 700};

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


describe("Combat damage calcule for two fighters - Ex1", ()=>{
  it("Calcule damage for two Pokemon uses the type effect", ()=>{
    expect(new DamageCalcule(blastoise, elekid).damage).to.be.eq(59.375);
    expect(new DamageCalcule(elekid, blastoise).damage).to.be.eq(50);
  });
  it("Calcule damage for two Dragon Ball figters uses the race", ()=>{
    expect(new DamageCalcule(vegeta, satan).damage).to.be.eq(200);
    expect(new DamageCalcule(satan, vegeta).damage)
        .to.be.eq(0.00013333333333333334);
  });
  it("Calcule damage for two different fighters uses the origin universe", ()=>{
    expect(new DamageCalcule(blastoise, vegeta).damage)
        .to.be.eq(0.31666666666666665);
    expect(new DamageCalcule(vegeta, blastoise).damage).to.be.eq(0.25);
  });
})