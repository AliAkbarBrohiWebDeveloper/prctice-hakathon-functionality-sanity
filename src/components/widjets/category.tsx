import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'

const categories=[
    
    
    
    {
id:1,
src:"/C1.png",
header:"Phones"



    },
    {
        id:2,
        src:"/C2.png",
        header:"Computers"
        
        
        
            },
            {
                id:3,
                src:"/C3.png",
                header:"SmartWatch"
                
                
                
                    },
                    {
                        id:4,
                        src:"/C4.png",
                        header:"Camera"
                        
                        
                        
                            },
                            {
                                id:5,
                                src:"/C5.png",
                                header:"HeadPhones"
                                
                                
                                
                                    },
                                    {
                                        id:6,
                                        src:"/C6.png",
                                        header:"Gaming"
                                        
                                        
                                        
                                            }

]


const Category = () => {
  return (
    <Wrapper>


<section className='mt-28'>

<main>

<div className='flex  gap-3 items-center'>
<Image src={'/rec.png' } alt='' height={20} width={20}/>
<h3 className='text-red-500 font-bold'>Categories</h3>



</div>

<div className=' mt-5 text-3xl font-bold'>

    <h3>Browse By Category</h3>
</div>


<div className='container grid grid-cols-2 md:grid-cols-6 mt-6 gap-1 '>
{
categories.map((products)=>{
return(
<div key={products.id} className='border-2 hover:text-white hover:bg-rose-600'>

<Image src={products.src} alt='' width={100} height={100} className='mx-11 md:mx-14'/>
<h4 className='text-center font-bold'>{products.header}</h4>


</div>



)

})


}


</div>



</main>



</section>


    </Wrapper>
  )
}

export default Category