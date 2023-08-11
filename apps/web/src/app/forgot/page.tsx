import { Metadata } from 'next'
import NextLink from 'next/link'

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  TextFieldInput,
} from '@radix-ui/themes'

import { Form } from './form'

export const metadata: Metadata = {
  title: 'Esqueci minha senha',
}

export default function Forgot() {
  return (
    <Flex align="center" justify="center" px="4" style={{ minHeight: '100vh' }}>
      <Card className="fade-in" size="3" style={{ width: 400 }}>
        <Form>
          <Box mb="5">
            <Heading as="h3" size="6" mt="-1" mb="2">
              Esqueceu sua senha?
            </Heading>
            <Text color="gray" size="2">
              Enviaremos um e-mail de confirmação para redefinir sua senha
            </Text>
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
          <Flex justify="end" gap="4" mt="6">
            <Button asChild variant="surface">
              <NextLink href="/signup">Voltar</NextLink>
            </Button>
            <Button type="submit">Enviar e-mail</Button>
          </Flex>
        </Form>
      </Card>
    </Flex>
  )
}
