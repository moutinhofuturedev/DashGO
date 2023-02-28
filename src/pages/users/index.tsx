import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/Sidebar/index";
import { useQuery } from "react-query";
import { ResponseApi } from "../../types/type";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users")
    const data = await response.json()

    const users = data.users.map((user: ResponseApi) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAd: new Date(user.createdAd).toLocaleDateString().padStart(2, '0')
      };
    });

    return users;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Head>
        <title>dashGo | Listagem</title>
        <meta name='description' content='DashGo' />
        <link rel="icon" type="image/svg+xml" href="../../public/dash.svg"></link>
      </Head>
      <Header />
      <Flex
        w={"100%"}
        my={"1.5rem"}
        maxWidth={1480}
        mx={"auto"}
        px={"1.5rem"}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg={"gray.800"} p={"2rem"}>
          <Flex
            mb={"2rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading as={"h2"} size={"lg"} fontWeight={"normal"}>
              Listagem de Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as={"a"}
                size={"sm"}
                fontSize={"sm"}
                colorScheme={"teal"}
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justifyContent={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justifyContent={"center"}>
              <Text>Falha ao obter dados do usuário</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme={"whiteAlpha"}>
                <Thead>
                  <Tr>
                    <Th px={["1rem", "1rem", "1.5rem"]} color={"gray.300"} w={"2rem"}>
                      <Checkbox colorScheme={"teal"} />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th w={"2rem"}>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user: ResponseApi, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td px={["1rem", "1rem", "1.5rem"]}>
                          <Checkbox colorScheme={"teal"} />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight={"bold"}>{user.name}</Text>
                            <Text fontSize={"sm"} color={"gray.300"}>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAd}</Td>}
                        <Td>
                          <Button
                            as={"a"}
                            size={"sm"}
                            fontSize={"sm"}
                            colorScheme={"teal"}
                            leftIcon={<Icon as={RiPencilLine} />}
                          >
                            {isWideVersion ? 'Editar' : ''}
                          </Button>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
