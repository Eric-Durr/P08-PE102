export type Stats = {
  atk: number,
  def: number,
  spd: number,
  hp: number
}

export abstract class Fighter {
  constructor(public readonly name: string,
              public readonly height: number,
              public readonly weight: number,
              public readonly gender: "Male" | "Female",
              public stats: Stats) {
  }
  abstract toString(): string;
}
