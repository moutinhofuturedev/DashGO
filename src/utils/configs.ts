import { theme } from "@chakra-ui/react"

export const series = [
    { name: "series 1", data: [20, 30, 33, 48, 52,27, 58, 78] },
    { name: "series 2", data: [2, 50, 13, 68, 72,87, 38, 43] }
]

export const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            "2021-03-18T00:00:00.000Z",
            "2021-03-19T00:00:00.000Z",
            "2021-03-20T00:00:00.000Z",
            "2021-03-21T00:00:00.000Z",
            "2021-03-22T00:00:00.000Z",
            "2021-03-23T00:00:00.000Z",
            "2021-03-24T00:00:00.000Z",
            "2021-03-25T00:00:00.000Z",
        ],    
    },
    fill: {
        opacity: "gradient",
        gradient: {
            shade: "dark",
        }
    }
}
