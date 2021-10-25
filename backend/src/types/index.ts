export enum ServiceError {
  AuthenticationError = 1,
  Unauthorized,
  AlreadyExists,
  NotFound
}

export interface IUserReqObject {
  user: { id: string };
}
