import { Button, Flex, Text } from "@chakra-ui/react";
import { Input } from "../components/Form";

export default function SignIn() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      w={"100vw"}
      px={"2rem"} // responsividade
    >
      <Text
        position={"absolute"}
        top={"2rem"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        letterSpacing={"tight"}
      >
        dashgo
        <Text
          as={"span"}
          color={"teal.400"}
          ml={"0.25rem"}
        >
          .
        </Text>
      </Text>
      <Flex
        as={"form"}
        w={"100%"}
        maxWidth={"23rem"} // 360px
        bg={"gray.800"}
        p={"2rem"} // 32px
        borderRadius={"0.5rem"} //8px
        flexDirection={"column"}
        gap={"1rem"} // 16px
      >
        <Input name={"email"} type={"email"} label={"E-mail"} placeholder="Digite seu e-mail"/>
        <Input name={"password"} type={"password"} label={"Senha"} placeholder="Digite sua senha"/>

        <Button
          type={"submit"}
          mt={"1.5rem"}
          bg={"teal.400"}
          _hover={{ bg: "teal.600" }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
