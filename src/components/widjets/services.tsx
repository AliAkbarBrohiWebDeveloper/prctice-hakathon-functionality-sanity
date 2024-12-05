// import React from 'react'
// import Wrapper from '../shareable/wrapper'
// import Image from 'next/image'



// const services=[
// {
// id:1,
// src:"/Services1.png",
// header:"FREE AND FAST DELIVERY",
// para:"Free delivery for all orders over $140"


// },

// {
//     id:2,
//     src:"/Services2.png",
//     header:"24/7 CUSTOMER SERVICE",
//     para:"Friendly 24/7 customer support"
    
    
//     },
//     {
//         id:3,
//         src:"/Services3.png",
//         header:"MONEY BACK GUARANTEE",
//         para:"We reurn money within 30 days"
        
        
//         },
            



// ]

// const Services = () => {
//   return (
// <Wrapper>

// <section className='mt-20'>


// <main className=' container grid grid-cols-2 md:grid-cols-3 '>
// {
//     services.map((item)=>{
// return(

// <div key={item.id} className='text-center mx-auto mt-4'>


// <Image src={item.src} alt='' height={40} width={40} className='ml-24'/>
// <h6 className='font-bold mt-3'>{item.header}</h6>
// <p>{item.para}</p>

// </div>


// )


//     })
// }




// </main>




// </section>


// </Wrapper>
//   )
// }

// export default Services





























import React from 'react';
import Wrapper from '../shareable/wrapper';
import Image from 'next/image';

const services = [
  {
    id: 1,
    src: "/Services1.png",
    header: "FREE AND FAST DELIVERY",
    para: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    src: "/Services2.png",
    header: "24/7 CUSTOMER SERVICE",
    para: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    src: "/Services3.png",
    header: "MONEY BACK GUARANTEE",
    para: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <Wrapper>
      <section className='mt-20'>
        <main className='container grid grid-cols-1 md:grid-cols-3 gap-6'>
          {services.map((item) => {
            return (
              <div key={item.id} className='text-center mx-auto'>
                <Image src={item.src} alt={item.header} height={40} width={40} className='mx-auto' />
                <h6 className='font-bold mt-3 text-lg'>{item.header}</h6>
                <p className='text-sm md:text-base'>{item.para}</p>
              </div>
            );
          })}
        </main>
      </section>
     </Wrapper>
  );
};

export default Services;




