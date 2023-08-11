import { Metadata } from 'next'
import NextLink from 'next/link'

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  TextFieldInput,
} from '@radix-ui/themes'

import { Form } from './form'

export const metadata: Metadata = {
  title: 'Entrar',
}

export default function SignUp() {
  return (
    <Flex align="center" justify="center" px="4" style={{ minHeight: '100vh' }}>
      <Card className="fade-in" size="3" style={{ width: 400 }}>
        <Form>
          <Box height="7" mb="4">
            <Heading as="h3" size="6" mt="-1">
              Entrar
            </Heading>
          </Box>
          <Box mb="5">
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Endereço de Email
              </Text>
              <TextFieldInput
                name="email"
                autoComplete="email"
                placeholder="Digite seu email"
              />
            </label>
          </Box>
          <Box mb="5" position="relative">
            <Box
              position="absolute"
              top="0"
              right="0"
              style={{ marginTop: -2 }}
            >
              <Link asChild size="2">
                <NextLink href="/forgot">Esqueceu sua senha?</NextLink>
              </Link>
            </Box>

            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Senha
              </Text>

              <TextFieldInput
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Digite sua senha"
              />
            </label>
          </Box>
          <Flex justify="end" gap="4" mt="6">
            <Button asChild variant="surface">
              <NextLink href="/signin">Crie uma conta</NextLink>
            </Button>
            <Button type="submit">Entrar</Button>
          </Flex>
        </Form>
      </Card>
    </Flex>
  )
}
