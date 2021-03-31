import { strict } from "node:assert";
import * as DSIFlix from "./DSIflix-interfaces";


abstract class Media {
  constructor(
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean) {}
}

class Film implements Media {
  constructor(
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean,
    public category: DSIFlix.Categories) {}
}
class Show implements Media {
  constructor(
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean,
    public category: DSIFlix.Categories,
    public chapters: number) {}
}

class Documentary implements Media {
  constructor(
    public name: string,
    public director: string,
    public cast: string[],
    public release: Date,
    public finished: Boolean,
    public chapters: number,
    public category: DSIFlix.Categories) {}
}

/* abstract class BasicStreamableCollection implements
  DSIFlix.Printable, DSIFlix.Searchable,
  DSIFlix.Reportable, DSIFlix.Reproduceable {
  constructor(public media: Media[]) {
  }
  searchByWord(name: string): string[] {
    return this.media.map((e)=> {
      if (e.name.includes(name)) {
        return e.name;
      }
    });
  }
  print(): string;
  badReport(review: string): void;
  goodReport(stars: 1 | 2 | 3 | 4 | 5, review?: string): void;
  play() {
    console.log()
  }
  stop():void;
}
 */