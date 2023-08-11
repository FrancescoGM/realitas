'use client'

import { FormEvent } from 'react'

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
  TextField,
} from '@radix-ui/themes'
import { formValues } from '@utils/form/formValues'

type FormEntries = {
  username: string
  email: string
  confirmation_email: string
  password: string
  confirmation_password: string
}

export function Form() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.target as HTMLFormElement)
    const data = formValues<FormEntries>(form)

    console.log(data)
  }

  return (
    <form onSubmit={onSubmit}>
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
          <TextField.Root>
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
            <TextField.Input name="username" placeholder="Digite seu nome" />
          </TextField.Root>
        </label>
        <Separator size="4" />
        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Endereço de email
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
            <TextField.Input name="email" placeholder="Digite seu email" />
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Confirmar email
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
            <TextField.Input
              name="confirmation_email"
              placeholder="Confirme seu email"
            />
          </TextField.Root>
        </label>
        <Separator size="4" />
        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Senha
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon />
            </TextField.Slot>
            <TextField.Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Confirmar senha
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon />
            </TextField.Slot>
            <TextField.Input
              name="confirmation_password"
              type="password"
              placeholder="Confirme sua senha"
            />
          </TextField.Root>
        </label>
      </Flex>
      <Flex justify="end" gap="4" mt="6">
        <Button asChild variant="surface">
          <Link href="/signup">Voltar</Link>
        </Button>
        <Button type="submit">Criar conta</Button>
      </Flex>
    </form>
  )
}
