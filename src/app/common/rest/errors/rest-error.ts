export class RestError extends Error {

  constructor(public message: string, public httpStatusCode: number, public code: string) {
    super(message);
    this.name = 'RestError';
    this.stack = (<any> new Error()).stack;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message
    };
  }

}
