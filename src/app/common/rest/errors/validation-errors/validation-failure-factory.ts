import { ValidatorError } from '../../../validation';
import { InvalidAttributeFailure } from './invalid-attribute-failure';
import { MissingAttributeFailure } from './missing-attribute-failure';

export class ValidationFailureFactory {
  public static fromValidatorError(error: ValidatorError) {
    if (error.validator === ValidatorError.REQUIRED_VALIDATOR) {
      return new MissingAttributeFailure(error.attribute, error.message);
    } else {
      return new InvalidAttributeFailure(error.attribute, error.message);
    }
  }
}