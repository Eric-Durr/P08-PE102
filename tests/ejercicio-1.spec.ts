import "mocha";
import {expect} from "chai";
import {Stats} from "../src/ejercicio-1/fighter";
import {TypeEffectCalcule} from "../src/ejercicio-1/type-effect-calcule";
import {PokemonFighter} from "../src/ejercicio-1/pokemon-fighter";

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

describe("Testing abstract class Fighter for Pokemon - Ex1", () => {
    const elekidStats: Stats = {
      atk: 60,
      def: 80,
      spd: 10,
      hp: 80};

    const elekid =
      new PokemonFighter("Elekid", 0.4, 50, elekidStats, "Electric");
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
        .eq("Name: Elekid\nHeight: 0.4 m\nWeight: 50 Kg\n"+
            "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 80\n"+
            "Type: Electric");
  });
  it("A default pokemon sets it's element to Normal", ()=>{
    const rattata =
    new PokemonFighter("Rattata", 0.2, 15, elekidStats);
    expect(rattata.name).to.be.eq("Rattata");
    expect(rattata.height).to.be.eq(0.2);
    expect(rattata.weight).to.be.eq(15);
    expect(rattata.stats.atk).to.be.eq(60);
    expect(rattata.stats.def).to.be.eq(80);
    expect(rattata.stats.spd).to.be.eq(10);
    expect(rattata.stats.hp).to.be.eq(80);
    expect(rattata.element).to.be.eq("Normal");
    expect(rattata.toString()).to.be
        .eq("Name: Rattata\nHeight: 0.2 m\nWeight: 15 Kg\n"+
            "Stats:\n\tAttak: 60\n\tDeffense: 80\n\tSpeed: 10\n\tHP: 80\n"+
            "Type: Normal");
  });
});
