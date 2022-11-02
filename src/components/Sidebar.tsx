import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
      <Box as={"aside"} w={"16rem"} mr={"1rem"}>
        <Stack spacing={"3rem"} align={"flex-start"}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"small"} color={"gray.400"}>
              GERAL
            </Text>
            <Stack spacing={"1rem"} mt={"2rem"} align={"stretch"}>
              <Link display={"flex"} alignItems={"center"} color={"teal.400"}>
                <Icon as={RiDashboardLine} fontSize={"20"}></Icon>
                <Text ml={"1rem"} fontWeight={"medium"}>
                  Dashboard
                </Text>
              </Link>
              <Link display={"flex"} alignItems={"center"} color={"teal.400"}>
                <Icon as={RiContactsLine} fontSize={"20"}></Icon>
                <Text ml={"1rem"} fontWeight={"medium"}>
                  Usuários
                </Text>
              </Link>
            </Stack>
          </Box>
                {/*  Divisão das divs */}
          <Box>
            <Text fontWeight={"bold"} fontSize={"small"} color={"gray.400"}>
              AUTOMAÇÃO
            </Text>
            <Stack spacing={"1rem"} mt={"2rem"} align={"stretch"}>
              <Link display={"flex"} alignItems={"center"} color={"teal.400"}>
                <Icon as={RiInputMethodLine} fontSize={"20"}></Icon>
                <Text ml={"1rem"} fontWeight={"medium"}>
                  Formulários
                </Text>
              </Link>
              <Link display={"flex"} alignItems={"center"} color={"teal.400"}>
                <Icon as={RiGitMergeLine} fontSize={"20"}></Icon>
                <Text ml={"1rem"} fontWeight={"medium"}>
                  Automação
                </Text>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
}