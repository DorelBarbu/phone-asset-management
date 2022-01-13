export type User = {
  username: string;
  password: string;
};

export type AuthenticationData = {
  token: string;
  expiresAt: string;
};

export type AuthenticatedUser = { username: string } & AuthenticationData;
