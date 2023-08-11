import { Metadata } from 'next'

import { Card, Flex } from '@radix-ui/themes'

import { Form } from './form'

export const metadata: Metadata = {
  title: 'Esqueci minha senha',
}

export default function Forgot() {
  return (
    <Flex align="center" justify="center" px="4" style={{ minHeight: '100vh' }}>
      <Card className="fade-in" size="3" style={{ width: 400 }}>
        <Form />
      </Card>
    </Flex>
  )
}
