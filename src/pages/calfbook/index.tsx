import {
    Box,
    Button,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import Router from 'next/dist/client/router'

import { RiArrowLeftCircleLine, RiSearchLine } from 'react-icons/ri'

export default function Calfbook() {
    const animals = [
        {
            calfId: 'm88',
            calfAge: '20 dias',
        },
    ]

    return (
        <Stack direction="column" m="2rem" spacing="2rem">
            <Stack spacing="2rem" direction="row" align="center">
                <RiArrowLeftCircleLine size="40px" onClick={Router.back} />

                <Box>
                    <Stack spacing="0" direction="row">
                        <Heading textColor="#EF8E9E">Calf</Heading>
                        <Heading color="#7EBAAD">Book</Heading>
                    </Stack>
                    <Heading size="md" fontWeight="md">
                        Seu livro de bolso para acompanhamento de bezerreiros
                    </Heading>
                </Box>
            </Stack>
            <Stack direction="row" m="2rem" spacing="2rem">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        // eslint-disable-next-line react/no-children-prop
                        children={<RiSearchLine color="gray.300" />}
                    />
                    <Input type="search" placeholder="Buscar bezerro" />
                </InputGroup>
                <Button colorScheme="green">Adicionar bezerro</Button>
            </Stack>
            {animals.map((animal) => (
                <TableContainer overflowX="auto" key={animal.calfId}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th textAlign="center">Identificação</Th>

                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td textAlign="center">{animal.calfId}</Td>

                                <Td textAlign="center">
                                    <Button colorScheme="pink">
                                        Visualizar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            ))}
        </Stack>
    )
}
