import { Metadata } from 'next'
import NextLink from 'next/link'

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
  TextFieldInput,
} from '@radix-ui/themes'

import { Form } from './form'

export const metadata: Metadata = {
  title: 'Criar conta',
}

export default function SignIn() {
  return (
    <Flex align="center" justify="center" px="4" style={{ minHeight: '100vh' }}>
      <Card className="fade-in" size="3" style={{ width: 400 }}>
        <Form>
          <Box height="7" mb="4">
            <Heading as="h3" size="6" mt="-1">
              Cria sua conta
            </Heading>
          </Box>
          <Flex direction="column" gap="3" mb="5">
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Nome
              </Text>
              <TextFieldInput name="username" placeholder="Digite seu nome" />
            </label>
            <Separator size="4" />
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Endereço de email
              </Text>
              <TextFieldInput name="email" placeholder="Digite seu email" />
            </label>
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Confirmar email
              </Text>
              <TextFieldInput
                name="confirmation_email"
                placeholder="Confirme seu email"
              />
            </label>
            <Separator size="4" />
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Senha
              </Text>
              <TextFieldInput
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </label>
            <label>
              <Text as="div" size="2" weight="medium" mb="2">
                Confirmar senha
              </Text>
              <TextFieldInput
                name="confirmation_password"
                type="password"
                placeholder="Confirme sua senha"
              />
            </label>
          </Flex>
          <Flex justify="end" gap="4" mt="6">
            <Button asChild variant="surface">
              <NextLink href="/signup">Voltar</NextLink>
            </Button>
            <Button type="submit">Criar conta</Button>
          </Flex>
        </Form>
      </Card>
    </Flex>
  )
}
