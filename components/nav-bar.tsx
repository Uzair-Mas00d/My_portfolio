'use client'

import Link from 'next/link'
import Image from 'next/image';
import logo from '../public/logo.png'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="text-lg text-[#E4E4E4] py-4 px-5 flex items-baseline bg-[#1B1B1D] fixed top-0 left-0 right-0 rounded-sm">
      <div className="flex-inital">
        <Link href='/'><Image width={25} src={logo} alt='name logo'/></Link>
      </div>
      <ul className="mx-5 flex-1 w-full flex gap-7 justify-center">
        <li className="group">
          <Link href='/me' className=''><span className={`${pathname==="/me" ? "text-blue-300": 'text-[#E4E4E4]'} group-hover:text-blue-400`}>//</span> me<span className='text-blue-300 font-semibold'>?</span></Link>
        </li>
        <li className="group">
          <Link href='/review'><span className={`${pathname==="/review" ? "text-blue-300": 'text-[#E4E4E4]'} group-hover:text-blue-400`}>//</span> review</Link>
        </li>
      </ul>
    </nav>
  );
};
