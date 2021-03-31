export interface IsConvertible<T> {
  convert(originScale: T): number[];
}
