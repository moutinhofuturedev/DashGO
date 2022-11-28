import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
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
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/Sidebar/index";

export default function UserList() {
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
        marginX={"auto"}
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

            <Button
              as={"a"}
              size={"sm"}
              fontSize={"sm"}
              colorScheme={"teal"}
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme={"whiteAlpha"}>
            <Thead>
              <Tr>
                <Th px={["1rem","1rem","1.5rem"]} color={"gray.300"} w={"2rem"}>
                  <Checkbox colorScheme={"teal"} />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de Cadastro</Th> }
                <Th w={"2rem"}>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["1rem","1rem","1.5rem"]}>
                  <Checkbox colorScheme={"teal"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Paulo Moutinho</Text>
                    <Text fontSize={"sm"} color={"gray.300"}>
                      paulo_vicali@icloud.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>08 de novembro, 2022</Td> }
                <Td>
                  <Button
                    as={"a"}
                    size={"sm"}
                    fontSize={"sm"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    { isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["1rem","1rem","1.5rem"]}>
                  <Checkbox colorScheme={"teal"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Renan Oliveira</Text>
                    <Text fontSize={"sm"} color={"gray.300"}>
                      renan_oliveira@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>02 de julho, 2022</Td> }
                <Td>
                  <Button
                    as={"a"}
                    size={"sm"}
                    fontSize={"sm"}
                    colorScheme={"teal"}
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    { isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
