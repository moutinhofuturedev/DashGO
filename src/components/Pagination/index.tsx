import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
      <Stack
        direction={"row"}
        mt="2rem"
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={"1.5rem"}
      >
        <Box>
          <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
        </Box>
        <Stack direction={"row"} spacing={"0.5rem"}>
          <PaginationItem number={1} isCurrent/>
          <PaginationItem number={2} />
          <PaginationItem number={3} />
          <PaginationItem number={4} />
          <PaginationItem number={5} />
          <PaginationItem number={6} />
        </Stack>
      </Stack>
    )
}
