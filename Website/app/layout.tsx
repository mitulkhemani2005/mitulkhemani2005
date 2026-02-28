import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mitul Khemani',
  description: 'Machine Learning and AI developer passionate about building intelligent, scalable systems. Specializing in transformers, NLP, and production ML.',
  keywords: ['Machine Learning', 'AI', 'Data Science', 'Python', 'Deep Learning', 'NLP'],
  author: 'Mitul Khemani',
  creator: 'Mitul Khemani',
  openGraph: {
    title: 'Mitul Khemani | ML & AI Developer',
    description: 'Machine Learning and AI developer passionate about building intelligent, scalable systems.',
    type: 'website',
  },
  icons: {
    // icon: '/mitulkhemani.png',
    apple: '/mitulkhemani.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
