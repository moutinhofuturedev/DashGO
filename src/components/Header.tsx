import { Flex, Text , Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri"

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
                <Text
                    as={"span"}
                    color={"teal.400"}
                    ml={"0.25rem"}
                >
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
                <Icon as={RiSearchLine} fontSize={"20"}/>
            </Flex>
        </Flex>
    )
}