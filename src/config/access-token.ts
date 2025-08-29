// Name of the cookie used to store the access token.
export const COOKIE_NAME = "access-token" as const;

// Expiration time in milliseconds for the access token.
export const EXPIRES_TIME = 1000 * 60 * 60 * 24 * 30; // <- Represents 30 days (1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 30 days).
