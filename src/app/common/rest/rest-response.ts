export class RestResponse {
  constructor(public data?: any, public error?: any) {
    if (data != null && error != null) {
      throw new Error('An ApiResponse instance should only contain one of data or error');
    }
  }

  toJSON() {
    return {
      data: this.data,
      error: this.error
    };
  }
}