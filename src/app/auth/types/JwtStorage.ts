// Defines an interface for a service that securely stores the token somewhere on the client side (i.e. local storage)
export abstract class JwtStorage {
  public abstract getToken(): string;
  public abstract getExpiresAt(): Date;
  public abstract setToken(token: string, expiresAt: string): void;
}