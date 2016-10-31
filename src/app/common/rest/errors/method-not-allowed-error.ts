import { RestError } from './rest-error';

export class MethodNotAllowedError extends RestError {

  constructor(
    public message: string = 'The endpoint does not support this HTTP method.'
  ) {
    super(message, 405, 'METHOD_NOT_ALLOWED');
    this.name = 'MethodNotAllowedError';
  }

}
