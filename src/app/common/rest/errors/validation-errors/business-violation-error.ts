import { RestError } from '../rest-error';
import { ValidationFailureItem } from './validation-failure-item';

// This error is meant to be thrown when there is some application-specific business logic,
// or data constraint that is violated by the request. These scenarios should be documented
// by your API, and referenced a unique error identifier. The "businessViolationCode"
// attribute can be used to store/serialize that unique error identifier.
//
// This should not be used for errors related to general request body validation. In that
// scenario, use a ValidationFailureError.
export class BusinessViolationError extends RestError {
  constructor(
    public businessViolationCode: string,
    public message: string = 'A business rule has been violated.'
  ) {
    super(message, 422, 'BUSINESS_VIOLATION');
    this.name = 'BusinessViolationError';
  }

  toJSON() {
    return {
      code: this.code,
      businessViolationCode: this.businessViolationCode,
      message: this.message
    };
  }

}
