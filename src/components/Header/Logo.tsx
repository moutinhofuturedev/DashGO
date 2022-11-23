import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight={"bold"}
      letterSpacing={"tight"}
      w={"16rem"}
    >
      dashgo
      <Text as={"span"} color={"teal.400"} ml={"0.25rem"}>
        .
      </Text>
    </Text>
  )
}
