import '@radix-ui/themes/styles.css'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@contexts/theme-provider'
import { Theme, ThemeOptions } from '@radix-ui/themes'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Bem vindo!',
    template: '%s | Realitas',
  },
  description:
    'Realitas é sua plataforma para manusear seus personagens de RPG',
}

export const theme = {
  accentColor: 'violet',
  grayColor: 'mauve',
  appearance: 'inherit',
  radius: 'medium',
  scaling: '100%',
  panelBackground: 'translucent',
} satisfies ThemeOptions

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Theme {...theme}>{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
