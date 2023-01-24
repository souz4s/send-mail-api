export class MissingParametersError extends Error {
  errorDetails: Record<string, unknown>;
  constructor() {
    super("Missing required parameters");
    this.name = "Missing Parameters Error";
    this.errorDetails = { error: this.name, message: super.message };
  }
}
