export abstract class Validator {
  abstract isEmpty(field: string): boolean;

  abstract notIn(field: string, items: string[]): boolean;
}
