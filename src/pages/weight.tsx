import {
    Input,
    Flex,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Select,
    Stack,
    HStack,
    VStack,
    Button,
    useDisclosure,
    Image,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"


import { useState } from 'react';


export default function Weight() {

    const [thoracicPerimeter, setThoracicPerimeter] = useState(0)



    const weight = -248.441 + (thoracicPerimeter * 3.158)





    const { isOpen, onOpen, onClose } = useDisclosure();
    function result() {
        onOpen()
    }

    return (
        <Stack
            as="form"
            width="100%"
            p="8"
            border-radius={8}
            flexDir="column"
            align="center"
            spacing='6'

        >
            <Heading size='lg'>
                Predição do peso vivo de bezerros por morfometria
            </Heading>
            <Image src="ptCalf.gif" boxSize="300px" borderRadius="lg" alt="Segun Adebayo" />
            <Text fontSize="md">O perímetro torácico é a melhor variável escolhida como preditora do
                peso vivo de bezerros</Text>
            <Heading size='md' color='gray' >Modo de uso</Heading>
            <Text fontSize="md" textAlign='justify' >Passe a fita métrica caudalmente à escápula passando pelo esterno
                e pelos processos espinhais das vértebras torácicas envolvendo todo tórax do animal</Text>
            <HStack
                spacing='10'
                align="end"
            >
                <FormControl id="email">
                    <FormLabel htmlFor='email'> Digite o perímetro torácico do animal &#40;cm&#41;</FormLabel>

                    <NumberInput
                        size='lg' min={80}
                        onChange={(valueString) => setThoracicPerimeter(Number(valueString))}
                        value={(thoracicPerimeter)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl id="email">
                    <FormLabel htmlFor='email'> Selecione a espécie</FormLabel>
                    <Select size='lg' placeholder="Espécie">
                        <option value="option1">Bubalino</option>
                        <option value="option2">Bovino</option>
                        <option value="option3">Caprino</option>
                        <option value="option3">Ovino</option>
                    </Select>
                </FormControl>
            </HStack>
            <Button mt='6' colorScheme='pink' onClick={onOpen}>Calcular Peso</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Predição do peso vivo de bezerros por morfometria</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading>O peso do seu animal é:</Heading>
                        <Heading color='pink.600' >{Math.round(weight)}Kg</Heading>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}