import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'
import Button from '../shareable/Button'
import Link from 'next/link'


const Images=[

{
    id:1,
src:"/F1.png",
header:'HAVIT HV-G92 Gamepad',
price:"$960",
delprice:"$1160",
star:'⭐⭐⭐⭐ (75)'




},


{
    id:2,
    src:"/F2.png",
    header:'AK-900 Wired Keyboard',
    price:"$120",
    delprice:"$160",
    star:'⭐⭐⭐⭐ (88)'
    
    
    
    
    },
    
{
    id:3,
    src:"/F3.png",
    header:'IPS LCD Gaming Monitor',
    price:"$370",
    delprice:"$400",
    star:'⭐⭐⭐⭐ (99)'
    
    
    
    
    },
    
{
    id:4,
    src:"/F4.png",
    header:'S-Series Comfort Chair ',
    price:"$375",
    delprice:"$400",
    star:'⭐⭐⭐⭐ (99)'
    
    
    
    
    },


]






const Sales = () => {
  return (
    <Wrapper>
<section className='mt-20 md:mt-28'>

<main>

<div className='flex  gap-3 items-center'>
<Image src={'/rec.png' } alt='' height={20} width={20}/>
<h3 className='text-red-500 font-bold'>Todays</h3>



</div>

<div className='flex gap-x-12 mt-4'>

<h4 className=' text-xl font-bold'>Flash sales</h4>
<div>
<p>Days</p>
<h2 className='font-bold text-xl'>03</h2>
</div>
<div>
<p>Hours</p>
<h2 className='font-bold text-xl'>23</h2>
</div>
<div>
<p>Minutes</p>
<h2 className='font-bold text-xl'>19</h2>
</div>
<div>
<p>Seconds</p>
<h2 className='font-bold text-xl'>56</h2>
</div>

</div>


<div className='  flex justify-center items-center flex-col md:flex-row gap-x-6 gap-y-6'>
{
Images.map((item)=>{
return(

<div key={item.id} className=' bg-gray-200  text-center mt-auto    lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group'>

<div className='lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative'>

<Image src={item.src} alt='' height={200} width={200} className='hover:scale-105 duration-300 mx-auto md:mx-16'/>

<Link href={`/products/${item.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Add to Cart</p>
                  </div>
                </Link>
</div>
<h3 className='mt-9'>{item.header}</h3>
<h4 className='text-red-400 font-bold'>{item.price}</h4>
<span> <del>{item.delprice}</del></span>

</div>

)

})

}

</div>
<div className='text-center mt-36'>
<Button text='View All products' />
</div>

</main>



</section>



    </Wrapper>
  )
}

export default Sales






































