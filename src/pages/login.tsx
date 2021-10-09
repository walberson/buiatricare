import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function Login() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} flexDir='column'>
      <Box boxSize="3xs"
        align="center"
        >
        <Image
          alt={'Login Image'}
          src={
            'logosn.png'
          }
        />
        </Box>
        <Stack spacing={4} w={'full'} maxW={'md'}>

          <Heading fontSize={'2xl'}>Acesse sua conta</Heading>
          <FormControl id="email">
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'login.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}