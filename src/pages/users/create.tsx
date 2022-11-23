import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../../components/Form";

import { Header } from "../../components/Header/index";
import { Sidebar } from '../../components/Sidebar/index';

export default function CreateUser() {

  return (
    <Box>
      <Head>
        <title>dashGo | Criar Usuário</title>
        <meta name='description' content='DashGo' />
        <link rel="icon" type="image/svg+xml" href="../../public/dash.svg"></link>
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
        <Box flex="1" borderRadius={8} bg={"gray.800"} p={"2rem"}>
          <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>

          <Divider my={"1.5rem"} borderColor={"gray.700"} />
          <VStack spacing={"2rem"}>
            <SimpleGrid minChildWidth={"15rem"} width={"100%"} spacing={"2rem"}>
                <Input name={"name"} label={"Nome completo"} />
                <Input name={"email"} type={"email"} label={"E-mail"}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth={"15rem"} width={"100%"} spacing={"2rem"}>
                <Input name={"password"} type={"password"} label={"Senha"}/>
                <Input name={"password_confirmation"} type={"password"} label={"Confirmação de senha"}/>
            </SimpleGrid>
          </VStack>

          <Flex mt={"2rem"} justifyContent={"flex-end"}>
            <HStack spacing={"1rem"}>
                <Button>Cancelar</Button>
                <Button colorScheme={"teal"}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
