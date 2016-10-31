import { RestError } from '../rest-error';
import { ValidationFailureItem } from './validation-failure-item';

// This error is meant to be thrown when there is some contract-specific validation failure
// in the request data that is sent to a REST endpoint. Throwing this error implies that the
// request was received, and it was valid JSON, but validation failures such as a "firstName"
// being too short, or an "email" not being a valid format occurred.
//
// This should not be used for errors related to business logic or integrity constraints.
// In that scenario, use a BusinessViolationError.
export class ValidationFailureError extends RestError {

  constructor(
    public failures: Array<ValidationFailureItem> = [],
    public message: string = 'Validation of request body failed.'
  ) {
    super(message, 400, 'VALIDATION_FAILURE');
    this.name = 'ValidationFailureError';
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      failures: this.failures
    };
  }

}
