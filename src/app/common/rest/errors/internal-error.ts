import { RestError } from './rest-error';

export class InternalError extends RestError {

  constructor(
    public originalError: Error,
    public message: string = 'An unexpected error has occurred.'
  ) {
    super(message, 500, 'INTERNAL_ERROR');
    this.name = 'InternalError';
  }

}
