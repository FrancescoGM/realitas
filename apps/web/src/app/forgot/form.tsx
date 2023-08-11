'use client'

import Link from 'next/link'
import { FormEvent } from 'react'

import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Box, Button, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { formValues } from '@utils/form/formValues'

type FormEntries = {
  email: string
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
      <Flex justify="end" gap="4" mt="6">
        <Button asChild variant="surface">
          <Link href="/signup">Voltar</Link>
        </Button>
        <Button type="submit">Enviar e-mail</Button>
      </Flex>
    </form>
  )
}
