import React from 'react';
import Head from './head';

import './assets/styles/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RemyXVX',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  )
}
