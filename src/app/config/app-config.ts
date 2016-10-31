import { StringUtils } from '../utils';

export class AppConfig {
  // required environment variables
  port: number;
  logLevel: string; // 'debug' | 'verbose' | 'info' | 'warn' | 'error';
  serveStatic: boolean;

  // optional environment variables
  enableHttpRequestLogging: boolean;

  constructor(private environment: any) {
    // required environment variables
    this.port = this.getIntegerEnvVar('PORT');
    this.logLevel = this.getStringEnvVar('LOG_LEVEL');
    this.serveStatic = this.getBooleanEnvVar('SERVE_STATIC');

    // optional environment variables
    this.enableHttpRequestLogging = this.getBooleanEnvVar('ENABLE_HTTP_REQUEST_LOGGING', false);
  }

  getEnvironment(): any {
    return this.environment;
  }

  /////////////////////////

  private getBooleanEnvVar(variableName: string, defaultValue: boolean = null): boolean {
    const value = this.getEnvVar(variableName, defaultValue);

    const errorMessage =
        `Environment Variable ${variableName} does not contain a valid boolean`;

    return StringUtils.parseBoolean(value, errorMessage);
  }

  private getIntegerEnvVar(variableName: string, defaultValue: number = null): number {
    const value = this.getEnvVar(variableName, defaultValue);

    const errorMessage =
        `Environment Variable ${variableName} does not contain a valid integer`;

    return StringUtils.parseInt(value, errorMessage);
  }

  private getStringEnvVar(variableName: string, defaultValue: string = null): string {
    return this.getEnvVar(variableName, defaultValue);
  }

  private getEnvVar(variableName: string, defaultValue: boolean | number | string): string {
    const value = this.environment[variableName] || defaultValue;

    if (value == null) {
      throw new Error(`Environment Variable ${variableName} must be set!`);
    }

    return value;
  }
}
