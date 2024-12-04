import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'

const Experience = () => {
  return (
<Wrapper>

<section className='mt-20'>


<main className='bg-[#000000] w-[350px] md:w-[1100px] h-[530px] md:h-[340px] mx-auto md:mx-14'>

    <div className='flex justify-between items-center  flex-col md:flex-row'>

<div className='px-6'>

<p className='text-green-500 mt-8'>Categories</p>

<h5 className='text-white text-1xl md:text-2xl font-bold  mt-20'>Enhance Your Music Experience</h5>

<div className='flex gap-3 mt-6'>

<Image src={'/ex1.png'} alt='' height={40} width={40}/>
<Image src={'/ex2.png'} alt='' height={40} width={40}/>
<Image src={'/ex3.png'} alt='' height={40} width={40}/>
<Image src={'/ex4.png'} alt='' height={40} width={40}/>


</div>

<button className='px-6 py-2 rounded-lg bg-green-500 text-white mt-5 hover:scale-105 duration-300'>Buy Now</button>
</div>
<Image src={'/music.png'} alt='' height={400} width={400} className='mr-24 md:mr-6 mt-9 ml-24' />


</div>


    



</main>

</section>


</Wrapper>
  )
}

export default Experience