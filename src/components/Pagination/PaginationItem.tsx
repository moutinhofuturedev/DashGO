import { Button } from "@chakra-ui/react"

type PaginationItemProps = {
    isCurrent?: boolean
    number: number
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent) {
      return (
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"1rem"}
          colorScheme={"teal"}
          disabled
          _disabled={{
            bg: "teal.500",
            cursor: "default",
          }}
        >
          {number}
        </Button>
      );
    }

    // else
    return (
      <Button
        size={"sm"}
        fontSize={"xs"}
        width={"1rem"}
        bg={"gray.700"}
        _hover={{
          bg: "gray.500",
        }}
      >
        {number}
      </Button>
    )
}