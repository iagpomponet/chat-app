export interface Contact {}

export interface AppError {
  message: string;
}

export interface LoginI {
  email: string;
  password: string;
}

export interface SignUpI {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
