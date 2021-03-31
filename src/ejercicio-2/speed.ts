import {IsConvertible} from "./is-convertible";

export class Speed implements
  IsConvertible<number> {
    public readonly usaValue: number;
  constructor(public readonly stdValue: number) {
    this.usaValue = this.convert(stdValue)[0];
  }
  convert(originScale: number) {
    return [originScale * 0.6213712];
  }
}
