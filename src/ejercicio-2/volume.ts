import {IsConvertible} from "./is-convertible";

export class Volume implements
  IsConvertible<number> {
    public readonly cubicmValue: number;
    public readonly gallonValue: number;
  constructor(public readonly litersValue: number) {
    this.cubicmValue = this.convert(litersValue)[0];
    this.gallonValue = this.convert(litersValue)[1];
  }
  convert(originScale: number) {
    return [originScale * 0.001, originScale * 0.2199692];
  }
}
