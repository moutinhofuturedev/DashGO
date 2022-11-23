import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({ // breakpoint aplicado no componente Profile e SearchBox
    base: false,
    lg: true
  })

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
      { isWideVersion && <SearchBox /> }
      <Flex alignItems={"center"} ml={"auto"}>
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}