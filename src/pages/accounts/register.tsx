import { useForm } from "react-hook-form";
import React from "react";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Stack,
    Image,
    Checkbox,
    Flex,
    Heading,
    Link,
    Box,
} from "@chakra-ui/react";



export default function Register() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 2000);
        });
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>


            <Flex p={8} flex={1} align={'center'} justify={'center'} flexDir='column'>


                <Box boxSize="3xs"
                    align="center"
                >
                    <Image
                        alt={'Login Image'}
                        src={
                            '/logosn.png'
                        }
                    />
                </Box>


                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Crie sua conta</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>




                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Nome</FormLabel>
                            <Input
                                type='name'
                                id="name"
                                placeholder="name"
                                {...register("name", {
                                    required: "This is required",
                                    minLength: { value: 4, message: "Minimum length should be 4" }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>



                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">E-mail</FormLabel>
                            <Input
                                type='email'
                                id="email"
                                placeholder="a@a.com"
                                {...register("email", {
                                    required: "This is required",
                                    minLength: { value: 4, message: "Minimum length should be 4" }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>



                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <Input
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: "This is required",
                                    minLength: { value: 4, message: "Minimum length should be 4" }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>



                        
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="password">Repetir Senha</FormLabel>
                            <Input
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: "This is required",
                                    minLength: { value: 4, message: "Minimum length should be 4" }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>







                        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </Stack>


            </Flex >

            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        '/login.jpg'
                    }
                />

            </Flex>


        </Stack >



    );
}