import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
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
          border: "2px solid #38B2AC",
          transition: "0.5s",
        }}
      />
    </Flex>
  )
}