import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

export const theme = extendTheme({
    components: {
        Steps,
    },
    colors: {
        gray: {
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#352646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2",
        },
    },
    fonts: {
        heading: "roboto",
        body: "roboto",
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "gray.900",
            },
        },
    },
});
