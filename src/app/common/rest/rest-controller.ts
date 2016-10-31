import { Request, Response } from 'express';
import { RestResponse } from './rest-response';
import { Validatable, Validator, ValidatorError } from '../validation';
import { BusinessViolationError, MethodNotAllowedError, ResourceNotFoundError,
  ValidationFailureError, ValidationFailureFactory } from './errors';

export class RestController {
  constructor() {}

  respond(res: Response, item: any | Array<any>, statusCode: number = 200): Response {
    const response = new RestResponse(item);
    return res.status(statusCode).json(response);
  }

  respondNoContent(res: Response, statusCode: number = 204): Response {
    return res.status(statusCode).json();
  }

  validateModel(model: Validatable): void {
    const validatorErrors: Array<ValidatorError> = model.validate();
    this.throwValidatorErrors(validatorErrors);
  }

  validateData(data: any, constraints: any): void {
    const validatorErrors: Array<ValidatorError> = Validator.validate(data, constraints);
    this.throwValidatorErrors(validatorErrors);
  }

  validateResourceFound(item: any) {
      if (item == null) {
        throw new ResourceNotFoundError();
      }
  }

  throwMethodNotAllowedError(req, res, next) {
    throw new MethodNotAllowedError();
  }

  throwBusinessViolation(businessViolationCode: string, message?: string) {
    throw new BusinessViolationError(businessViolationCode, message);
  }

  ////////////////////

  private throwValidatorErrors(validatorErrors: Array<ValidatorError>): void {
    if (validatorErrors == null) {
      return;
    }

    const failures = validatorErrors.map((error: ValidatorError) => {
      return ValidationFailureFactory.fromValidatorError(error);
    });

    throw new ValidationFailureError(failures);
  }
}