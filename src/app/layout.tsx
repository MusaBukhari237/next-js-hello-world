import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Head from 'next/head';
import Link from 'next/link';

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
        
        {/* Header Start */}
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/users`}>Users</Link></li>
              </ul>
            </div>
            <Link href={`/`} className="btn btn-ghost text-xl">NextJS - Hello World</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><Link href={`/`}>Home</Link></li>
              <li><Link href={`/users`}>Users</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            
          </div>
        </div>
        {/* Header End */}
        

<main className='p-6'>
        {children}
</main>
      </body>
    </html>
  )
}
