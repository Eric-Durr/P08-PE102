import {IsConvertible} from "./is-convertible";

export class Temperature implements
  IsConvertible<number> {
    public readonly celsiusValue: number;
    public readonly fahrenheitValue: number;
  constructor(public readonly kelvinValue: number) {
    this.celsiusValue = this.convert(kelvinValue)[0];
    this.fahrenheitValue = this.convert(kelvinValue)[1];
  }
  convert(originScale: number) {
    return [originScale - 274.15, originScale - 457.87];
  }
}
