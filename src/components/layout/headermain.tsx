import React from 'react'
import Wrapper from '../shareable/wrapper'
import Link from 'next/link'
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
  

const Headermain = () => {
  return(
    <Wrapper>
      <header className="flex justify-between items-center p-4">
        <div>
          <h4 className="text-2xl font-semibold">Exclusive</h4>
        </div>

        <div>
          <ul className=" space-x-4 hidden md:flex font-semibold">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/signup'}>Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="relative w-64 hidden md:block"> 
          <input 
            type="text" 
            placeholder="What are you looking for" 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
        </div>
<div>
  <Link href={'/heart'}><BiHeart className='text-4xl font-bold'/></Link>

</div>
<div>
  <Link href={'/cart'}><BiCart className='text-3xl font-bold'/></Link>


</div>
<div>

<Link href={'/user'}>
<BiUser className='text-3xl font-bold'/>

</Link>


</div>



<Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <div>
          <ul className="flex flex-col gap-y-6 space-x-4 text-xl font-bold">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/signup'}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>




      </header>
    </Wrapper>
  )
}

export default Headermain
