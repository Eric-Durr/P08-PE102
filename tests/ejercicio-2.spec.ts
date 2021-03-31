import "mocha";
import { expect } from "chai";
import {Mass} from "../src/ejercicio-2/mass";
import {Force} from "../src/ejercicio-2/force";
import {Length} from "../src/ejercicio-2/length";
import {Speed} from "../src/ejercicio-2/speed";
import {Temperature} from "../src/ejercicio-2/temperature";
import {Time} from "../src/ejercicio-2/time";
import {Volume} from "../src/ejercicio-2/volume";

describe("Testing all units conversion - Ex2", () => {
  it("Mass converts kilograms to pounds", () => {
    expect(new Mass(1).usaValue).to.be.eq(2.204623);
  });
  it("Force converts newtons to pounds per meter", () => {
    expect(new Force(1).usaValue).to.be.eq(0.2248);
  });
  it("Length converts meters to miles", () => {
    expect(new Length(1).usaValue).to.be.eq(3.28084);
  });
  it("Speed converts Km/h to mph", () => {
    expect(new Speed(1).usaValue).to.be.eq(0.6213712);
  });
  it("Temperature converts kelvins to celsius and fahrenheit", () => {
    expect(new Temperature(0).celsiusValue).to.be.eq(-274.15);
    expect(new Temperature(0).fahrenheitValue).to.be.eq(-457.87);
  });
  it("Time converts seconds to minutes and hours", () => {
    expect(new Time(60).minutesValue).to.be.eq(1);
    expect(new Time(360).hoursValue).to.be.eq(1);
  });
  it("Volume converts liters to gallons and cubic centimeters", () => {
    expect(new Volume(1).gallonValue).to.be.eq(0.2199692);
    expect(new Volume(1000).cubicmValue).to.be.eq(1);
  });
});
