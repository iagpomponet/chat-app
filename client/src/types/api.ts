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

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  profilePhoto: string;
}
