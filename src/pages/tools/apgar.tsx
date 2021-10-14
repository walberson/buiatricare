import {
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Stack

} from "@chakra-ui/react"
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useState } from "react";

import { LoremIpsum } from "react-lorem-ipsum"

interface stepsProps {
    label: string,
    description: string,
    option1: string,
    option2: string,
    option3: string
}

const steps: stepsProps[] = [
    {
        label: "Reação da cabeça (à água fria)",
        description: 'Essa é a reação da cabeça',
        option1: 'Espontânea',
        option2: 'Diminuída',
        option3: 'Ausente',
    },
    {
        label: "Reflexos (palpebral e interdigital)", description: 'Essa é a reação da cabeça',
        option1: 'Responsivo a ambos',
        option2: 'Responsivo a um reflexo',
        option3: 'Ausente',
    },
    {
        label: "Coloração das mucosas", description: 'Essa é a reação da cabeça',
        option1: 'Rosa',
        option2: 'Branco azulada',
        option3: 'Azulada',
    },
    {
        label: "Respiração", description: 'Essa é a reação da cabeça',
        option1: 'Rítmica',
        option2: 'Arrítmica',
        option3: 'Ausente',
    },
]



export default function Apgar() {


    const [selectOption, setSelectOption] = useState(0)
    const [total, setTotal] = useState(0)



    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })



    async function selectOption1() {
        console.log(selectOption)
        await setSelectOption(2)
        console.log(selectOption)

        

        nextStep()


    }
    function selectOption2() {
        
        setSelectOption(1)

        setTotal(total + selectOption)
        nextStep()
        console.log(total)
    }
    function selectOption3() {
        setSelectOption(0)


        setTotal(total + selectOption)
        nextStep()
        console.log(total)
    }
    function backStep() {
        setTotal(total - selectOption)
        setSelectOption(0)

        prevStep()
        console.log(total)
    }
    function resetSteps() {
        setTotal(0)
        setSelectOption(0)
        reset()

        
        console.log(total)
        console.log(selectOption)

    }


    return (

        <Flex
            align='center'
            justify='center'
            margin='8'

        >
            <VStack width="100%"
                maxW='768px'
            >
                <Steps orientation="vertical" activeStep={activeStep}>
                    {steps.map(({ label, description, option1, option2, option3 }) => (
                        <Step label={label} key={label}>
                            <Stack textAlign="justify" py={2} px={4}
                                align="center"
                                justify="center"
                                direction="column"
                                spacing='2'
                            >
                                <Text>
                                    {description}
                                </Text>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='teal.500'
                                    onClick={selectOption1}
                                >{option1}</Button>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='yellow.500'
                                    onClick={selectOption2}
                                >{option2}</Button>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='red.500'
                                    onClick={selectOption3}
                                >{option3}</Button>


                            </Stack>
                        </Step>
                    ))}
                </Steps>
                {activeStep === 4 ? (
                    <div>
                        <Heading>
                            Resultado
                        </Heading>
                        <Text>
                            {total}
                        </Text>
                        <Button
                            onClick={resetSteps}
                        >Reiniciar

                        </Button>
                    </div>
                ) : (
                    <Stack
                        direction="row"
                        spacing="10">

                        <Button
                            disabled={activeStep === 0}
                            onClick={backStep}
                        >Voltar</Button>
                    </Stack>

                )}
            </VStack>
        </Flex>

    )
}