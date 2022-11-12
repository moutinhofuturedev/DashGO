import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

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
      <Logo />
      <SearchBox />
      <Flex alignItems={"center"} ml={"auto"}>
        <Notification />
        <Profile />
      </Flex>
    </Flex>
  )
}