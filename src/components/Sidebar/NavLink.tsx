import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps  = {
    icon: ElementType
    children: string
}

type TotalLinkProps = NavLinkProps & ChakraLinkProps

export function NavLink({icon, children, ...rest}: TotalLinkProps) {
  return (
    <Link display={"flex"} alignItems={"center"} color={"teal.400"} {...rest}>
      <Icon as={icon} fontSize={"20"}></Icon>
      <Text ml={"1rem"} fontWeight={"medium"}>
        {children}
      </Text>
    </Link>
  )
}
