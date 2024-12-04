
import Image from 'next/image'
import Wrapper from '../shareable/wrapper'



const Hero = () => {
  return (
    <Wrapper>

<section className='mt-16'>
<main className='flex justify-between items-center gap-x-6 flex-col md:flex-row'>
<div>
<ul className=' hidden md:block'>
<li>Womans Fashion</li>
<li>Mens Fashion</li>
<li> Electronics</li>
<li>Home & Lifestyle</li>
<li>Medicine</li>
<li>Sports & Outdoor</li>
<li>Babys & Toys</li>
<li>Groceries & Pets</li>
<li>Health & Beauty</li>



</ul>


</div>


<div className='bg-black w-[770px] h-[340px] text-white '>

    <div className='flex justify-evenly items-center'>


<div className='ml-[200px] md:ml-6'>

<div className='flex gap-x-3'>

<Image src={'/apple.png'} alt='applelogo' height={10} width={20}/>
<span>iPhone 14 Series</span>

</div>

<h1 className=' md:text-4xl mt-6 text-xl'>Up to 10% off Voucher</h1>
<p className='mt-6 text-xl underline'>Shop Now</p>


</div>

<Image src={'/hero.png'} alt='' height={200} width={350} className='mr-28'/>


    </div>





</div>

</main>



</section>


    </Wrapper>
  )
}

export default Hero