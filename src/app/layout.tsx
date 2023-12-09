import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from './components/NavBar/NavBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS',
  description: 'NextJS Developed by Musa Bukhari.',

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" data-theme="winter">
      <Head>
        <link rel="shortcut icon" href="assets/img/Logo.png" type="image/x-icon" />
      </Head>
      <body className='' >

        <NavBar />

        <main className='p-6'>
          {children}
        </main>
      </body>
    </html>
  )
}
