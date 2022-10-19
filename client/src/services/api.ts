import axios, { AxiosError } from "axios";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";

// Types
import { AppError, Contact, LoginI, SignUpI } from "../types/api";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

api.interceptors.response.use(
  (res) => res,
  function (error) {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

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

export const getContact = (): Promise<Contact> => {
  return api.get(`/contacts`).then((res) => res.data);
};

export const useGetContact = () => useQuery("userData", () => getContact());

export default api;
