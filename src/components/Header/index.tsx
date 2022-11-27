import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidedarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidedarDrawer()
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
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open Navigation"
          mr="0.5rem"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex alignItems={"center"} ml={"auto"}>
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}