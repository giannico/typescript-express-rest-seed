import validateJs = require('validate.js');
import { ValidatorError } from './validator-error';

export class Validator {
    // this is a pointer to the entire validateJs library
    public static _validateJs;

    // static initialization code
    private static _constructor = (() => {
        // store a reference to the validateJs library
        Validator._validateJs = validateJs;

        Validator.registerCustomValidators();
    })();

    private static registerCustomValidators() {
        Validator._validateJs.validators.notNull = Validator.notNullValidator;
        Validator._validateJs.validators.required = Validator.requiredValidator;
    }

    // expose the "validate" library as a static function (to be used to perform validations)
    // public static validate: validateJs.ValidateFn = Validator._validateJs.bind(validateJs);
    static validate(attributes: any, constraints: any, options?: any): Array<ValidatorError> {

      const validatorErrors =
          Validator._validateJs(attributes, constraints, { format: 'detailed' });

      if (validatorErrors == null) { return null; }

      return validatorErrors.map(error => {
        return new ValidatorError(error.attribute, error.value, error.validator, error.error);
      });
    };

    private constructor() {}

    ////////////////////////////////////////
    //// custom validators
    ////////////////////////////////////////

    private static notNullValidator(value, options, key, attributes) {
      if (value === null) {
        const errorMessage = options.message || 'can not be null.';
        return errorMessage;
      }

      return null;
    }

    private static requiredValidator(value, options, key, attributes) {
      if (value === undefined) {
        const errorMessage = options.message || 'is required to be present.';
        return errorMessage;
      }

      return null;
    }
}