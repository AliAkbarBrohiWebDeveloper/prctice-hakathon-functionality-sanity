
import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'

const Experience = () => {
  return (
    <Wrapper>
      <section className='mt-20'>
        <main className='bg-[#000000] w-full max-w-[1100px] h-auto md:h-[340px] mx-auto md:mx-14 rounded-lg'>
          <div className='flex flex-col md:flex-row justify-between items-center md:h-full p-6'>
            {/* Left Section */}
            <div className='text-center md:text-left md:w-1/2'>
              <p className='text-green-500 mt-8'>Categories</p>
              <h5 className='text-white text-2xl md:text-3xl font-bold mt-6 md:mt-20'>
                Enhance Your Music Experience
              </h5>

              <div className='flex  gap-3 mt-6'>
                <Image src={'/ex1.png'} alt='' height={40} width={40} />
                <Image src={'/ex2.png'} alt='' height={40} width={40} />
                <Image src={'/ex3.png'} alt='' height={40} width={40} />
                <Image src={'/ex4.png'} alt='' height={40} width={40} />
              </div>

              <button className='px-6 py-2 rounded-lg bg-green-500 text-white mt-5 hover:scale-105 duration-300'>
                Buy Now
              </button>
            </div>

            
            <div className='mt-9 md:mt-0 md:w-1/2 flex justify-center'>
              <Image src={'/music.png'} alt='' height={400} width={400} className='object-contain' />
            </div>
          </div>
        </main>
      </section>
    </Wrapper>
  )
}

export default Experience









