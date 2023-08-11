'use client'

import NextLink from 'next/link'
import { FormEvent } from 'react'

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from '@radix-ui/react-icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes'
import { formValues } from '@utils/form/formValues'
import { useBoolean } from 'hooks/useBoolean'

type FormEntries = {
  email: string
  password: string
}

export function Form() {
  const [visible, { toggle }] = useBoolean(false)
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
          Entrar
        </Heading>
      </Box>
      <Box mb="5">
        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Endereço de Email
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
            <TextField.Input
              name="email"
              autoComplete="email"
              placeholder="Digite seu email"
            />
          </TextField.Root>
        </label>
      </Box>
      <Box mb="5" position="relative">
        <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
          <Link asChild size="2">
            <NextLink href="/forgot">Esqueceu sua senha?</NextLink>
          </Link>
        </Box>

        <label>
          <Text as="div" size="2" weight="medium" mb="2">
            Senha
          </Text>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon />
            </TextField.Slot>
            <TextField.Input
              type={visible ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              placeholder="Digite sua senha"
            />
            <TextField.Slot>
              <IconButton
                onClick={toggle}
                variant="ghost"
                color="gray"
                aria-label={visible ? 'Esconder senha' : 'Revelar senha'}
              >
                {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </label>
      </Box>
      <Flex justify="end" gap="4" mt="6">
        <Button asChild variant="surface">
          <NextLink href="/signin">Crie uma conta</NextLink>
        </Button>
        <Button type="submit">Entrar</Button>
      </Flex>
    </form>
  )
}
