import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Input } from "../components/Form";
import { SubmitHandler, useForm } from "react-hook-form"
import { signInFormSchema } from "../constants/FormValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import { SignInFormData } from "../types/type";

export default function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const router = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 4000))

    router.push("/dashboard")
  }
   
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      w={"100vw"}
      px={"2rem"} 
    >
      <Head>
        <title>dashGo | Login</title>
        <meta name='description' content='DashGo' />
        <link rel="icon" type="image/svg+xml" href="../../public/dash.svg"></link>
      </Head>
      <Text
        position={"absolute"}
        top={"2rem"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        letterSpacing={"tight"}
      >
        dashgo
        <Text as={"span"} color={"teal.400"} ml={"0.25rem"}>
          .
        </Text>
      </Text>
      <Flex
        as={"form"}
        w={"100%"}
        maxWidth={["18rem", "23rem"]} 
        bg={"gray.800"}
        p={"2rem"} 
        borderRadius={"0.5rem"} 
        flexDirection={"column"}
        gap={"1rem"} 
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Input
          type={"email"}
          label={"E-mail"}
          error={errors.email}
          placeholder="Digite seu e-mail"
          _placeholder={{ color: "gray.400" }}
          {...register("email")}
        />
        <Input
          type={"password"}
          label={"Senha"}
          error={errors.password}
          placeholder="Digite sua senha"
          _placeholder={{ color: "gray.400" }}
          {...register("password")}
        />

        <Button
          type={"submit"}
          mt={"1.5rem"}
          bg={"teal.400"}
          _hover={{ bg: "teal.600" }}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
      <Text
        as={"footer"}
        position={"absolute"}
        bottom={"1.5rem"}
      >
        Feito por Paulo Moutinho, 2022.
      </Text>
    </Flex>
  );
}
