export class StringUtils {
  static isValidBoolean(value: string | boolean): boolean {
    return (value === 'true' || value === 'false' || value === true || value === false);
  }

  static isValidInteger(value: string): boolean {
    const parsedInt = parseInt(value, 10);
    return !isNaN(parsedInt);
  }

  static parseBoolean(value: string, errorMessage?: string): boolean {
    if (!StringUtils.isValidBoolean(value)) {
      const message = errorMessage || `${value} is not a valid boolean!`;
      throw new Error(message);
    }

    return StringUtils.convertStringToBoolean(value);
  }

  static parseInt(value: string, errorMessage?: string): number {
    if (!StringUtils.isValidInteger(value)) {
      const message = errorMessage || `${value} is not a valid int!`;
      throw new Error(message);
    }

    return parseInt(value, 10);
  }

  private static convertStringToBoolean(value: string) {
    return value === 'true';
  }
}