import { RiHealthBookLine, RiMapPinAddFill } from 'react-icons/ri'
import Link from 'next/link'
import { Heading, Stack, Text } from '@chakra-ui/react'

interface userProps {
    name: string
}

export function Dashboard({ name }: userProps) {
    return (
        <Stack direction="column" m="2rem" spacing="2rem">
            <Heading fontWeight="md">Olá {name}</Heading>

            <Heading size="md" fontWeight="md">
                Neonatology
            </Heading>

            <Stack direction="row">
                <Link href="/calfbook">
                    <Stack
                        align="center"
                        maxW="160px"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="a"
                    >
                        <RiHealthBookLine size="30px" color="#e8235e" />
                        <Text>Calf Book</Text>
                    </Stack>
                </Link>
            </Stack>
            <Heading size="md" fontWeight="md">
                Neurology
            </Heading>

            <Stack direction="row">
                <Stack
                    align="center"
                    maxW="160px"
                    textAlign="center"
                    borderColor="gray.100"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p="6"
                    bg="white"
                >
                    <RiMapPinAddFill size="30px" color="#e8235e" />
                    <Text>Auxílio ao diagnóstico</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}
