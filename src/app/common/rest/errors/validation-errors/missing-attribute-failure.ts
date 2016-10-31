import { ValidationFailureItem } from './validation-failure-item';

export class MissingAttributeFailure extends ValidationFailureItem {
  public static MISSING_CODE: string = 'missing';

  constructor(public attribute: string, public message: string) {
    super(attribute, MissingAttributeFailure.MISSING_CODE, message);
  }
}