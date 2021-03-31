/* Streamable interface separated*/


type Categories = "Horror" | "Comedy" | "Drama" |
                 "Fantasy" | "Historical" | "Crime";

interface Searchable {
  // searchByCategory(category: Categories): string[];
  searchByWord(name: string): string[];
}

interface Printable {
  print(): string;
}

interface Reportable {
  badReport(review: string): void;
  goodReport(stars: 1 | 2 | 3 | 4 | 5, review?: string): void;
}

interface Reproduceable {
  play():void;
  stop():void;
}
export {Categories, Searchable, Printable, Reportable, Reproduceable};
