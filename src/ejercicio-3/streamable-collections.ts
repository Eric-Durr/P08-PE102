import * as DSIFlix from "./DSIflix-interfaces";


abstract class Media {
  constructor(
    public category: DSIFlix.Categories,
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean) {}
}

abstract class Film implements Media {
  constructor(
    public category: DSIFlix.Categories,
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean) {}
}
abstract class Show implements Media {
  constructor(
    public category: DSIFlix.Categories,
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean,
    public chapters: number) {}
}

abstract class Documentary implements Media {
  constructor(
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean,
    public chapters: number,
    public type: "Earth" | "History" | "Mitology") {}
}

abstract class BasicStreamableCollection implements
  DSIFlix.Printable, DSIFlix.Searchable,
  DSIFlix.Reportable, DSIFlix.Reproduceable {
  constructor(public media: Media[]) {
  }

  searchByCategory(category: DSIFlix.Categories): string[] {};
  searchByWord(name: string): string[];
  print(): string;
  badReport(review: string): void;
  goodReport(stars: 1 | 2 | 3 | 4 | 5, review?: string): void;
  play() {
    console.log()
  }
  stop():void;
}
