import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Components
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  useTheme,
} from "@chakra-ui/react";
import { BsFillChatDotsFill } from "react-icons/bs";

// Services
import { useLogin } from "../../services/api";

// Styles
import * as Styled from "./login.styles";

const Login = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    isSuccess: loginSuccess,
    mutateAsync: doLogin,
    isError: loginError,
    data,
    error,
  } = useLogin();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const theme = useTheme();

  useEffect(() => {
    if (loginSuccess) {
    }
  }, [loginSuccess]);

  const submitForm = async () => {
    const { email, password } = getValues();

    await doLogin({
      email,
      password,
    });
    navigate("/chat");
  };

  return (
    <Flex
      direction="column"
      w="100%"
      h="fit-content"
      m="auto"
      p="10px"
      borderRadius="13px"
      maxW="500px"
      align="center"
      justify="center"
      bg="white"
      position="relative"
      top="50%"
      transform="translateY(-50%)"
    >
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Flex direction="column" gap="10px" w="100%">
          <FormControl isInvalid={!!errors.email?.message}>
            <Flex align="center" justify="center">
              <BsFillChatDotsFill
                color={theme.colors.blue["900"]}
                style={{ fontSize: "50px" }}
              />
              <Text p="1rem 20px" fontSize="5xl">
                Chat App
              </Text>
            </Flex>
            <Input
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: true,
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password?.message}>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          {loginError ? (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                {error?.response?.data?.message}
              </AlertDescription>
            </Alert>
          ) : null}
          <Button isLoading={isLoading} type="submit">
            Sign in
          </Button>
          <Flex>
            <Text>New here? Create an </Text>
            <Link to="/signup">
              <Text ml="4px" fontWeight="semibold">
                account
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Styled.Form>
    </Flex>
  );
};

export default Login;
