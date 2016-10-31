import { RestError } from './rest-error';

export class InvalidJsonError extends RestError {

  constructor(
    public message: string = 'Request does not contain valid JSON data.'
  ) {
    super(message, 400, 'INVALID_JSON_ERROR');
    this.name = 'InvalidJsonError';
  }

}
