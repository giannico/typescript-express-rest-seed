export class ValidationFailureItem {
    constructor(
      public attribute: string,
      public code: string,
      public message: string
    ) {}
};