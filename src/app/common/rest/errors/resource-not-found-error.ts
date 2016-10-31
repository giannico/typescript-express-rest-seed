import { RestError } from './rest-error';

export class ResourceNotFoundError extends RestError {

  constructor(
    public message: string = 'The resource could not be found.'
  ) {
    super(message, 404, 'RESOURCE_NOT_FOUND');
    this.name = 'ResourceNotFoundError';
  }

}
