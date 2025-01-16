// built-in Error class has - message, name, stack
export class ExpressError extends Error {
  statusCode: number;
  details?: any; // Add details to captured error details
  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    if (details) this.details = details;  // Optionally attach details if provided

    Object.setPrototypeOf(this, ExpressError.prototype)
  }
}