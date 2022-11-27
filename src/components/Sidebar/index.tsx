import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SidebarNav } from './SidebarNav';
import { useSidedarDrawer } from "../../context/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidedarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="1.5rem">
          <DrawerCloseButton mt="1.5rem"/>
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Box as={"aside"} w={"16rem"} mr={"1rem"}>
      <SidebarNav />
    </Box>
  )
}