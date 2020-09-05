export interface Validator {
  isEmpty(field: string): boolean;

  notIn(field: string, items: string[]): boolean;
}
