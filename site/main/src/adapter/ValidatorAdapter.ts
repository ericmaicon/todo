import { Validator } from '@api/domain';

export default class ValidatorAdapter implements Validator {
  isEmpty(field: string): boolean {
    return /^\s*$/g.test(field);
  }

  notIn(field: string, items: string[]): boolean {
    return !items.includes(field);
  }
}
