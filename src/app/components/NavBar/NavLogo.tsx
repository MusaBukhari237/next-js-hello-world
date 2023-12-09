'use client';

import Link from 'next/link';
import React from 'react'

export default function NavLogo() {
  return (
      <Link href={`/`} className="btn btn-ghost text-xl">NextJS - Hello World</Link>
  )
}
