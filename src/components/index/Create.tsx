import {
    Text,
    Heading,
    Stack,
    Image,
    Box

} from '@chakra-ui/react'


export function Create() {


    return (
        <Stack
            justify="center"
            align="center"
            padding="10"
            direction="column"
            background='gray.600'
        >
            <Box
            boxSize="160"
            mb='-8'
            >
            <Image
            alt='Gaia Logo'
            src='gaia.png'
            />
            </Box>
            <Heading
            color='white'
            >
                Quem desenvolveu o BuiatriCare?
            </Heading>
            <Text
            textAlign='justify'
            color='white'
            fontSize='md'
            >
                O BuiatriCare é a única plataforma tecnológica voltada ao médico veterinário buiatra do Brasil.
                Seu projeto foi idealizado pelo grupo de pesquisas GAIA - Livestock Health and Reproduction Research Group.
                 Grupo que nasceu em 2013 na Universidade Federal Rural da Amazônia e desde então vem desenvolvendo ciência e tecnologia para a sociedade.
            </Text>
        </Stack>
    )
}