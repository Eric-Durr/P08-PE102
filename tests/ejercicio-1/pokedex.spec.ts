import "mocha";
import {expect} from "chai";
import {Stats} from "../../src/ejercicio-1/fighter";
import {PokemonFighter} from "../../src/ejercicio-1/pokemon-fighter";
import {DragonBallFighter} from "../../src/ejercicio-1/dragon-ball-fighter";
import {PokedexEntry} from "../../src/ejercicio-1/pokedex-entry";
import {Pokedex, PokedexOutput} from "../../src/ejercicio-1/pokedex";

const vegetaStats: Stats = {
  atk: 60,
  def: 80,
  spd: 10,
  hp: 120};

const vegeta =
new DragonBallFighter("Vegeta", 1.64, 56, "Male",
                      vegetaStats, "Saiyan", 18000);
const elekidStats: Stats = {
  atk: 60,
  def: 80,
  spd: 10,
  hp: 80};

const elekid =
  new PokemonFighter("Elekid", 0.4, 50, "Female", elekidStats, "Electric");


describe("Pokedex entry class tests - Ex1", ()=>{
  it("Creating a pokemon entry returns an object with all its features", ()=>{
    const myFirstPokemonEntry = new PokedexEntry(elekid);
    expect(myFirstPokemonEntry.entry)
        .to.be.eq("Pokemon Fighter | Elekid | H: 0.4m | W: 50kg | G: ♀");
  });
  it("Creating a DB entry returns an object with all its features", ()=>{
    const mySecondPokemonEntry = new PokedexEntry(vegeta);
    expect(mySecondPokemonEntry.entry)
        .to.be.eq("Dragon Ball Fighter | Vegeta | H: 1.64m | W: 56kg | G: ♂");
  });
});


describe("Pokedex, testing empty case - Ex1", ()=>{
  const mtPokedex = new Pokedex;
  it("An empty pokedex can be created by default", ()=>{
    expect(mtPokedex.maxSlots).to.be.eq(0);
    expect(mtPokedex.knownFighters).to.be.eq(0);
    expect(mtPokedex.unknownFighters).to.be.eq(0);
  });
  it("Pokedex wont be able to insert fighters unless maxSlots upgrade", ()=>{
    expect(mtPokedex.scanFighters(new PokedexEntry(vegeta))).to.be.false;
    expect(mtPokedex.maxSlots).to.be.eq(0);
    expect(mtPokedex.knownFighters).to.be.eq(0);
    expect(mtPokedex.unknownFighters).to.be.eq(0);
  });
  it("Pokedex wont be able to remove fighters unless maxSlots upgrade", ()=>{
    expect(mtPokedex.removeFighter("Vegeta")).to.be.false;
    expect(mtPokedex.maxSlots).to.be.eq(0);
    expect(mtPokedex.knownFighters).to.be.eq(0);
    expect(mtPokedex.unknownFighters).to.be.eq(0);
  });
  it("Pokedex can upgrade slots number, object changes the features", ()=>{
    mtPokedex.upgradeSlots(150);
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(0);
    expect(mtPokedex.unknownFighters).to.be.eq(150);
  });
  it("Pokedex can add fighters, object changes the features", ()=>{
    mtPokedex.scanFighters(new PokedexEntry(vegeta), new PokedexEntry(elekid));
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(2);
    expect(mtPokedex.unknownFighters).to.be.eq(148);
  });
});

describe("Pokedex, testing start list case - Ex1", ()=>{
  const mtPokedex = new Pokedex(150,
                                new PokedexEntry(vegeta),
                                new PokedexEntry(elekid));
  it("A pokedex can be created by passing arguments", ()=>{
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(2);
    expect(mtPokedex.unknownFighters).to.be.eq(148);
  });
  it("Fighters can be accessed form Pokedex", ()=>{
    expect(mtPokedex.getFighter("Vegeta")).to.be.eql(new PokedexEntry(vegeta));
  });
  it("Unknown fighters returns undefined when accessed", ()=>{
    expect(mtPokedex.getFighter("Broly")).to.be.undefined;
  });
  it("Pokedex wont be able to insert far beyond maxSlots size", ()=>{
    mtPokedex.upgradeSlots(-148);
    expect(mtPokedex.scanFighters(new PokedexEntry(vegeta))).to.be.false;
    expect(mtPokedex.maxSlots).to.be.eq(2);
    expect(mtPokedex.knownFighters).to.be.eq(2);
    expect(mtPokedex.unknownFighters).to.be.eq(0);
  });
  it("Pokedex can't add fighters that allready exists", ()=>{
    mtPokedex.upgradeSlots(148);
    expect(mtPokedex
      .scanFighters(new PokedexEntry(vegeta), new PokedexEntry(elekid)))
      .to.be.false;
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(2);
    expect(mtPokedex.unknownFighters).to.be.eq(148);
  });
  it("Pokedex can remove existing fighters", ()=>{
    expect(mtPokedex.removeFighter("Vegeta")).to.be.true;
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(1);
    expect(mtPokedex.unknownFighters).to.be.eq(149);
  });
  it("Pokedex can't remove non existing fighters", ()=>{
    expect(mtPokedex.removeFighter("Broly")).to.be.false;
    expect(mtPokedex.maxSlots).to.be.eq(150);
    expect(mtPokedex.knownFighters).to.be.eq(1);
    expect(mtPokedex.unknownFighters).to.be.eq(149);
  });
});

describe("Outputting Pokedex through PokedexOutput class - Ex1 ", ()=>{
  it("Empty pokedex case", ()=>{
    const mtPokedex = new Pokedex();
    const newOutput = new PokedexOutput(mtPokedex);
    expect(newOutput.print())
        .to.be.eq("\n==== POKEDEX STATUS OUTPUT ====\n"+
                  "SLOTS: 0/0 -- 0 free spaces\n"+
                  "--no registered fighters yet--\n");
  });
  it("Non empty pokedex case", ()=>{
    const mtPokedex = new Pokedex(150,
                                  new PokedexEntry(vegeta),
                                  new PokedexEntry(elekid));
    const newOutput = new PokedexOutput(mtPokedex);
    expect(newOutput.print())
        .to.be
        .eq("\n==== POKEDEX STATUS OUTPUT ====\n"+
            "SLOTS: 2/150 -- 148 free spaces\n"+
            "\t1 | Dragon Ball Fighter | Vegeta | H: 1.64m | W: 56kg | G: ♂\n"+
            "\t2 | Pokemon Fighter | Elekid | H: 0.4m | W: 50kg | G: ♀\n");
  });
});

