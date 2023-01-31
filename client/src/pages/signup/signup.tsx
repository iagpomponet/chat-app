import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useTheme,
  AlertDescription,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFillChatDotsFill } from "react-icons/bs";

// Styles
import * as Styled from "./signup.styles";
import { useSignUp } from "../../services/api";

const Signup = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    isLoading: signUpLoading,
    mutateAsync: doSignUp,
    isError: signUpError,
    error,
  } = useSignUp();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async () => {
    const { firstName, lastName, email, password } = getValues();

    await doSignUp({
      firstName,
      lastName,
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
      <Flex align="center" justify="center">
        <BsFillChatDotsFill
          color={theme.colors.blue["900"]}
          style={{ fontSize: "50px" }}
        />
        <Text p="1rem 20px" fontSize="5xl">
          Chat App
        </Text>
      </Flex>
      <Flex>
        <Text p="1rem 20px" fontSize="2xl">
          Signup
        </Text>
      </Flex>
      <Styled.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex gap="10px">
          <FormControl>
            <Input
              placeholder="First name"
              id="firstName"
              {...register("firstName", {
                required: true,
              })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Last name"
              {...register("lastName", {
                required: true,
              })}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <Input
            placeholder="E-mail"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
        </FormControl>
        {signUpError ? (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>
              {error?.response?.data?.message}
            </AlertDescription>
          </Alert>
        ) : null}
        <Button isLoading={signUpLoading} type="submit">
          Sign up
        </Button>
      </Styled.Form>
      <Flex textAlign="left" mt="10px">
        <Text>Already have a account?</Text>
        <Link to="/">
          <Text ml="4px" fontWeight="semibold">
            Sign in
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Signup;
