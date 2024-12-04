import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'
import Button from '../shareable/Button'


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
<section className='mt-56 md:mt-28'>

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


<div className='  container grid  grid-cols-2 md:grid-cols-4 gap-x-9 gap-y-36 mt-11'>
{
Images.map((item)=>{
return(

<div key={item.id} className=' bg-gray-200 text-center mt-auto  w-auto h-[175px]'>
<Image src={item.src} alt='' height={200} width={200} className='hover:scale-105 duration-300 mx-auto md:mx-16'/>
<h3 className='mt-3'>{item.header}</h3>
<h4 className='text-red-400 font-bold'>{item.price}</h4>
<span> <del>{item.delprice}</del></span>

</div>
)

})

}



</div>
<div className='text-center mt-28'>
<Button text='View All products' />
</div>

</main>



</section>



    </Wrapper>
  )
}

export default Sales