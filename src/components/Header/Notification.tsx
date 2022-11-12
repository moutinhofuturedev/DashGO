import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Notification() {
  return (
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
  )
}
