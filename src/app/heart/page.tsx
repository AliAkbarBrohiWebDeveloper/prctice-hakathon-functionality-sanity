import Wrapper from '@/components/shareable/wrapper'
import Image from 'next/image'
import React from 'react'


const WishlistImages=[
{
    id:1,
src:"/h1.png",
button:"Add Cart",
header:"Gucci duffle bag",
price:"$960",
delPrice:"$1160"

},
{
    id:2,
src:"/h2.png",
button:"Add Cart",
header:"RGB liquid CPU Cooler",
price:"$1960",
delPrice:"$2060"

},

{
    id:3,
src:"/h3.png",
button:"Add Cart",
header:"GP11 Shooter USB Gamepad",
price:"$550",
delPrice:"$760"

},

{
    id:4,
src:"/h4.png",
button:"Add Cart",
header:"Quilted Satin Jacket",
price:"$750",
delPrice:"$1060"

},

]







const HeartPage = () => {
  return (
    <Wrapper>

<section className='mt-16 md:mt-9'>

<main>


<div className='flex justify-between items-center'>

<h4>Wishlist (4)</h4>
<button className='px-6 py-2 border-2 '>Move All To Bag</button>


</div>


<div className='conatiner grid grid-cols-2 md:grid-cols-4 gap-16 '>

{

    WishlistImages.map((item)=>{

return(

<div key={item.id } className=' mt-3'>

<Image src={item.src} alt='' height={180} width={190}/>
<button className='bg-black text-white px-9 py-2 rounded-sm hover:scale-105 duration-300'>{item.button}</button>
<h4 className='mt-3 text-xl '>{item.header}</h4>
<span className='text-red-500  font-semibold'>{item.price}</span>
<span>  <del>{item.delPrice}</del></span>



</div>

)

    })
}


</div>


<div className='flex justify-between items-center mt-20'>

<h3 className='border-l-[20px] border-red-500  text-2xl font-bold'>Just For You</h3>

<button className='px-6 py-2 border-2 '>See All</button>

</div>


<div className='container grid grid-cols-2 md:grid-cols-4 gap-20 mt-12 '>

<div>

<Image src={'/h5.png'} alt='' height={200} width={200}/>
<button className='px-8 py-2 bg-black rounded-sm text-white hover:scale-105 duration-300'>Add Cart</button>
<h4 className='mt-2 text-xl'> Gucci duffle bag</h4>
<span className='text-red-500 font-semibold'>$960</span>
<span>$1160</span>
<p>⭐⭐⭐⭐ (65)</p>

</div>
<div>

<Image src={'/h6.png'} alt='' height={200} width={200}/>
<button className='px-8 py-2 bg-black rounded-sm text-white mt-4 hover:scale-105 duration-300'>Add Cart</button>
<h4 className='mt-2 text-xl'> IPS LCD Gaming Monitor</h4>
<span className='text-red-500 font-semibold'>$1160</span>
<p>⭐⭐⭐⭐ (65)</p>

</div>
<div>

<Image src={'/h7.png'} alt='' height={200} width={200}/>
<button className='px-8 py-2 bg-black rounded-sm md:mt-8 text-white hover:scale-105 duration-300'>Add Cart</button>
<h4 className='mt-2 text-xl'> HAVIT HV-G92 Gamepad</h4>
<span className='text-red-500 font-semibold'>$560</span>

<p>⭐⭐⭐⭐ (65)</p>

</div>
<div>

<Image src={'/h8.png'} alt='' height={200} width={200}/>
<button className='px-8 py-2 bg-black rounded-sm text-white mt-12 md:mt-24 hover:scale-105 duration-300'>Add Cart</button>
<h4 className='mt-2 text-xl'> AK-900 Wired Keyboard</h4>
<span className='text-red-500 font-semibold'>$200</span>

<p>⭐⭐⭐⭐ (65)</p>

</div>



</div>2



</main>



</section>



    </Wrapper>
  )
}

export default HeartPage