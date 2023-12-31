import { HeaderSimple } from './components/layout/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head />
      <RootStyleRegistry>
        <body>
          {children}
        </body>
      </RootStyleRegistry>
    </html>
  );
}
