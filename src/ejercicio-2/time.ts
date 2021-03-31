import {IsConvertible} from "./is-convertible";

export class Time implements
  IsConvertible<number> {
    public readonly minutesValue: number;
    public readonly hoursValue: number;
  constructor(public readonly secondsValue: number) {
    this.minutesValue = this.convert(secondsValue)[0];
    this.hoursValue = this.convert(secondsValue)[1];
  }
  convert(originScale: number) {
    return [originScale / 60, originScale / 360];
  }
}
