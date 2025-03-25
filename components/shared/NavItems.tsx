import { headerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <ul className='md:flex-between flex w-full flex-col md:flex-row gap-5 items-start'> 
      {headerLinks.map((link) => {
        return (
          <li key={link.route}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems