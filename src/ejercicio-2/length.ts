import {IsConvertible} from "./is-convertible";

export class Length implements
  IsConvertible<number> {
    public readonly usaValue;
  constructor(public readonly stdValue: number) {
    this.usaValue = this.convert(stdValue)[0];
  }
  convert(originScale: number) {
    return [originScale * 3.28084];
  }
}
