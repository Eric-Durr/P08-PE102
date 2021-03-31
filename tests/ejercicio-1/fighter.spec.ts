import "mocha";
import {expect} from "chai";
import {Stats} from "../../src/ejercicio-1/fighter";
import {TypeEffectCalcule} from "../../src/ejercicio-1/type-effect-calcule";
import {PokemonFighter} from "../../src/ejercicio-1/pokemon-fighter";
import {DragonBallFighter} from "../../src/ejercicio-1/dragon-ball-fighter";

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

describe("Type effect calcule in combat is nested in another class - Ex1", ()=>{
  it("When advantage input class sets as 2", ()=>{
    expect(new TypeEffectCalcule("Fire", "Grass").outputEffect)
    .to.be.eq(2);
    expect(new TypeEffectCalcule("Water", "Fire").outputEffect)
    .to.be.eq(2);
  });
  it("When disasvantage input class sets as 0.5", ()=>{
    expect(new TypeEffectCalcule("Electric", "Grass").outputEffect)
    .to.be.eq(0.5);
    expect(new TypeEffectCalcule("Electric", "Electric").outputEffect)
    .to.be.eq(0.5);
    expect(new TypeEffectCalcule("Bug", "Steel").outputEffect)
    .to.be.eq(0.5);
  });
  it("When no effect input class sets as 0", ()=>{
    expect(new TypeEffectCalcule("Normal", "Ghost").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Electric", "Ground").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Fighting", "Ghost").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Poison", "Steel").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Ground", "Flying").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Psychic", "Dark").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Ghost", "Normal").outputEffect)
    .to.be.eq(0);
    expect(new TypeEffectCalcule("Dragon", "Fairy").outputEffect)
    .to.be.eq(0);
  });
  it("When balanced input class sets as 1", ()=>{
    expect(new TypeEffectCalcule("Normal", "Grass").outputEffect)
    .to.be.eq(1);
    expect(new TypeEffectCalcule("Ice", "Fighting").outputEffect)
    .to.be.eq(1);
    expect(new TypeEffectCalcule("Fighting", "Fighting").outputEffect)
    .to.be.eq(1);
  });
});

describe("Testing concrete class PokemonFighter from Fighter - Ex1", () => {
  it("A pokemon can be created and it's features accessed", () => {
    expect(elekid.name).to.be.eq("Elekid");
    expect(elekid.height).to.be.eq(0.4);
    expect(elekid.weight).to.be.eq(50);
    expect(elekid.stats.atk).to.be.eq(60);
    expect(elekid.stats.def).to.be.eq(80);
    expect(elekid.stats.spd).to.be.eq(10);
    expect(elekid.stats.hp).to.be.eq(80);
    expect(elekid.element).to.be.eq("Electric");
    expect(elekid.toString()).to.be
        .eq("Name: Elekid\nHeight: 0.4 m\nWeight: 50 Kg\n"+"Gender: Female\n"+
            "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 80\n"+
            "Type: Electric");
  });
  it("A default pokemon sets it's element to Normal", ()=>{
    const rattata =
    new PokemonFighter("Rattata", 0.2, 15, "Female", elekidStats);
    expect(rattata.name).to.be.eq("Rattata");
    expect(rattata.height).to.be.eq(0.2);
    expect(rattata.weight).to.be.eq(15);
    expect(rattata.stats.atk).to.be.eq(60);
    expect(rattata.stats.def).to.be.eq(80);
    expect(rattata.stats.spd).to.be.eq(10);
    expect(rattata.stats.hp).to.be.eq(80);
    expect(rattata.element).to.be.eq("Normal");
    expect(rattata.toString()).to.be
        .eq("Name: Rattata\nHeight: 0.2 m\nWeight: 15 Kg\n"+"Gender: Female\n"+
            "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 80\n"+
            "Type: Normal");
  });
});

describe("Testing concrete class DragonBallFighter from Fighter - Ex1", () => {
  it("A DB fighter can be created and it's features accessed", () => {
    expect(vegeta.name).to.be.eq("Vegeta");
    expect(vegeta.height).to.be.eq(1.64);
    expect(vegeta.weight).to.be.eq(56);
    expect(vegeta.stats.atk).to.be.eq(60);
    expect(vegeta.stats.def).to.be.eq(80);
    expect(vegeta.stats.spd).to.be.eq(10);
    expect(vegeta.stats.hp).to.be.eq(120);
    expect(vegeta.race).to.be.eq("Saiyan");
    expect(vegeta.pl).to.be.eq(18000);
    expect(vegeta.toString()).to.be
        .eq("Name: Vegeta\nHeight: 1.64 m\nWeight: 56 Kg\n"+"Gender: Male\n"+
            "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 120\n"+
            "Race: Saiyan\nPower Level: 18000");
  });
  it("A DB fighter can increase lvl and so Power Level", () => {
    expect(vegeta.pl).to.be.eq(18000);
    vegeta.increaseLevel(1);
    expect(vegeta.pl).to.be.eq(18000 + (18000 * 60));
  });
  it("A default dragon ball fighter sets it's race to Human and pl to 1", ()=>{
    const default1 =
    new DragonBallFighter("Pedro", 1.75, 72, "Male", vegetaStats);
    expect(default1.name).to.be.eq("Pedro");
    expect(default1.height).to.be.eq(1.75);
    expect(default1.weight).to.be.eq(72);
    expect(default1.stats.atk).to.be.eq(60);
    expect(default1.stats.def).to.be.eq(80);
    expect(default1.stats.spd).to.be.eq(10);
    expect(default1.stats.hp).to.be.eq(120);
    expect(default1.race).to.be.eq("Human");
    expect(default1.pl).to.be.eq(1);
    expect(default1.toString()).to.be
    .eq("Name: Pedro\nHeight: 1.75 m\nWeight: 72 Kg\n"+"Gender: Male\n"+
        "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 120\n"+
        "Race: Human\nPower Level: 1");
  });
});
