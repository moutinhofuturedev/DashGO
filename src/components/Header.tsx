import { Flex, Text , Input, Icon, HStack, Box, Avatar, transition } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
    return (
      <Flex
        as={"header"}
        w={"100%"}
        maxW={1480}
        h={"5rem"}
        marginX="auto"
        mt={"1rem"}
        px={"1.5rem"}
        align={"center"}
      >
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          letterSpacing={"tight"}
          w={"16rem"}
        >
          dashgo
          <Text as={"span"} color={"teal.400"} ml={"0.25rem"}>
            .
          </Text>
        </Text>

        <Flex
          as={"label"}
          flex={"1"}
          py={"1rem"}
          px={"2rem"}
          ml={"1.5rem"}
          maxWidth={400}
          alignSelf={"center"}
          alignItems={"center"}
          color={"gray.200"}
          position={"relative"}
          bg={"gray.800"}
          borderRadius={"full"}
        >
          <Input
            px={"1rem"}
            mr={"1rem"}
            color={"gray.50"}
            variant={"unstyled"}
            placeholder={"Buscar na plataforma"}
            _placeholder={{ color: "gray.400" }}
          />
          <Icon as={RiSearchLine} fontSize={"20"} />
        </Flex>

            <Flex alignItems={"center"} ml={"auto"}>
                <HStack
                    spacing={"2rem"}
                    mx={"2rem"}
                    pr={"2rem"}
                    py={"0.25rem"}
                    color={"gray.300"}
                    borderRightWidth={1}
                    borderColor={"gray.700"}
                >
                    <Icon as={RiNotificationLine} fontSize={"20"} />
                    <Icon as={RiUserAddLine} fontSize={"20"} />
                </HStack>

                <Flex align={"center"}>
                    <Box mr={"1rem"} textAlign={"right"}>
                        <Text>Paulo Moutinho</Text>
                        <Text color={"gray.300"} fontSize={"small"}>
                            paulo_vicali@vicali@.com
                        </Text>
                    </Box>
                    <Avatar 
                      name={"Paulo Moutinho"} 
                      size={"md"} 
                      src={"https://avatars.githubusercontent.com/u/86997545?v=4"}
                      _hover={{
                        border: "2px solid #38B2AC", transition: '0.5s'
                      }}
                    />
                </Flex>
            </Flex>
      </Flex>
    );
}