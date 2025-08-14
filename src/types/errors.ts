export class PropertyNotFoundError extends Error {
  constructor(slug: string) {
    super(`Property with slug "${slug}" not found`);
    this.name = "PropertyNotFoundError";
  }
}

export class PropertyServiceError extends Error {
  constructor(
    message: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = "PropertyServiceError";
  }
}
