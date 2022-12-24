import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/Form";
import { useForm } from "react-hook-form"

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<SignInFormData>()

  const handleSignIn = async (values: SignInFormData) => {
    await new Promise(resolve => setTimeout(resolve, 4000))
    console.log(values)
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
          placeholder="Digite seu e-mail"
          _placeholder={{ color: "gray.400" }}
          {...register("email")}
        />
        <Input
          type={"password"}
          label={"Senha"}
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
