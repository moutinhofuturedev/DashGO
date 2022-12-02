import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

type NavLinkProps  = {
    icon: ElementType
    children: string
    href: string
}

type TotalLinkProps = NavLinkProps & ChakraLinkProps

export function NavLink({icon, children, href ,...rest}: TotalLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} color={"teal.400"} {...rest}>
        <Icon as={icon} fontSize={"20"}></Icon>
        <Text ml={"1rem"} fontWeight={"medium"}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  )
}
