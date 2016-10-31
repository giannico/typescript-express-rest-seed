import { ValidationFailureItem } from './validation-failure-item';

export class InvalidAttributeFailure extends ValidationFailureItem {
  public static INVALID_CODE: string = 'invalid';

  constructor(public attribute: string, public message: string) {
    super(attribute, InvalidAttributeFailure.INVALID_CODE, message);
  }
}