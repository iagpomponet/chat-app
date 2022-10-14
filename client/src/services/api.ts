import axios, { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "react-query";

// Types
import { AppError, LoginI, SignUpI } from "../types/api";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const login = ({ email, password }: LoginI) => {
  return api
    .post("/contacts/auth", { email, password })
    .then((res) => res.data);
};

export const useLogin: () => UseMutationResult<
  any,
  AxiosError<AppError, any>,
  LoginI,
  unknown
> = () => useMutation(login);

export const signUp = ({ firstName, lastName, email, password }: SignUpI) => {
  return api
    .post("/contacts/signup", { firstName, lastName, email, password })
    .then((res) => res.data);
};

export const useSignUp: () => UseMutationResult<
  any,
  AxiosError<AppError, any>,
  SignUpI,
  unknown
> = () => useMutation(signUp);

export default api;
