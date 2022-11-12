import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Header } from "../components/Header/index"
import { Sidebar } from "../components/Sidebar"
import dynamic from "next/dynamic"
import { series, options } from "../utils/configs"

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false // Server Sider Rendering está desligado
})

export default function Dashboard() {
    return (
      <Flex h={"100vh"} flexDirection={"column"}>
        <Header />
        <Flex
          w={"100%"}
          my={"1.5rem"}
          maxWidth={1480}
          marginX={"auto"}
          px={"1.5rem"}
        >
          <Sidebar />
          <SimpleGrid flex={"0.25rem"} gap={"1rem"} minChildWidth={"20rem"}>
            <Box p={"2rem"} bg={"gray.800"} borderRadius={"1.5rem"}>
              <Text fontSize={"lg"} mb={"1rem"}>
                Inscritos da semana
              </Text>
              <Chart type="area" height={160} options={options} series={series}/>
            </Box>
            <Box p={"2rem"} bg={"gray.800"} borderRadius={"1.5rem"}>
              <Text fontSize={"lg"} mb={"1rem"}>
                Taxa de abertura
              </Text>
              <Chart type="area" height={160} options={options} series={series}/>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    )
}