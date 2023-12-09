'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Item {
  name: string;
  url: string;
}

export default function NavItems({ Items }: { Items: Item[] }) {

  const currentRoute = usePathname();

  const isRouteActive = (url: string) => {
    let isRoute = currentRoute === url;
    const tempURL = url.replace("/", "").split("/");
    const tempRoute = currentRoute.replace("/", "").split("/");
    if (tempURL.length > 0 && tempRoute.length > 0) {
      isRoute = tempURL[0] === tempRoute[0] ? true : false;
    }

    return isRoute;
  }

  return (
    <>
      {Items.map((item: Item, index: number) =>
        <li key={`NavItem_${index}`}><Link className={isRouteActive(item.url) ? 'active' : ''} href={item.url}>{item.name}</Link></li>
      )}

    </>
  )
}
