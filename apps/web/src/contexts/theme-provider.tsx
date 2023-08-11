'use client'
import { ThemeProvider as ThemeProviderPrimitive } from 'next-themes'
import { ReactNode } from 'react'

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderPrimitive attribute="class">
      {children}
    </ThemeProviderPrimitive>
  )
}
