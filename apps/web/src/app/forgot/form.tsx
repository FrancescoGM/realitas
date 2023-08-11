'use client'

import { ReactNode, FormEvent } from 'react'

import { formValues } from '@utils/form/formValues'

type FormEntries = {
  email: string
}

type FormProps = {
  children?: ReactNode
}

export function Form({ children }: FormProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.target as HTMLFormElement)
    const data = formValues<FormEntries>(form)

    console.log(data)
  }

  return <form onSubmit={onSubmit}>{children}</form>
}
