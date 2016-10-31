import { ValidatorError } from '../../common';

export interface Validatable {
  validate(): Array<ValidatorError>;
  isValid(): boolean;
}