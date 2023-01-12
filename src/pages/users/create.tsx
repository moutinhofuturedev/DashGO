import { Box, Button, Divider, Flex, FormErrorMessage, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form";
import { Header } from "../../components/Header/index";
import { Sidebar } from '../../components/Sidebar/index';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from "../../constants/FormValidationSchema";

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUserFormData>({
    resolver: yupResolver(userFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) => {
    await new Promise((resolve) => setTimeout(resolve, 4000))

    console.log(values)
  } 

  return (
    <Box>
      <Head>
        <title>dashGo | Criar Usuário</title>
        <meta name="description" content="DashGo" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="../../public/dash.svg"
        ></link>
      </Head>
      <Header />
      <Flex
        w={"100%"}
        my={"1.5rem"}
        maxWidth={1480}
        marginX={"auto"}
        px={"1.5rem"}
      >
        <Sidebar />
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg={"gray.800"}
          p={["1.5rem", "2rem"]}
        >
          <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>

          <Divider my={"1.5rem"} borderColor={"gray.700"} />
          <VStack spacing={"2rem"}>
            <SimpleGrid
              minChildWidth={"15rem"}
              width={"100%"}
              spacing={["1.5rem", "2rem"]}
            >
              <Input type={"text"} label={"Nome completo"} {...register("name")} />
              <Input type={"email"} label={"E-mail"} {...register("email")}/>
            </SimpleGrid>

            <SimpleGrid
              minChildWidth={"15rem"}
              width={"100%"}
              spacing={["1.5rem", "2rem"]}
            >
              <Input type={"password"} label={"Senha"} {...register("password")}/>
              <Input
                type={"password"}
                label={"Confirmação de senha"}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt={"2rem"}
            justifyContent={["space-between", "flex-end"]}
            gap={"1rem"}
          >
            <Link href="/users" passHref>
              <Button as={"a"}>Cancelar</Button>
            </Link>
            {/* <Link href="/users" passHref> */}
              <Button colorScheme={"teal"} type="submit" isLoading={isSubmitting}>Salvar</Button>
            {/* </Link> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
