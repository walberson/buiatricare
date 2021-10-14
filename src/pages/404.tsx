import {
    Box,
    Image,
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";

export default function Custom404() {
    return (
        <Flex
            align="center"
            justify="center"
            w='100vw'
            h='85vh'
            direction='column'
        >

            <Heading>
                Erro 404
            </Heading>
            <Text>
                Desculpe-me, a página não foi encontrada
            </Text>
        </Flex>
    )
}