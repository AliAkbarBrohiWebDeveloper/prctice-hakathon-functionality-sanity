// import React from 'react'
// import Wrapper from '../shareable/wrapper'
// import Image from 'next/image'
// import Button from '../shareable/Button'

// const products=[

//     {
//         id:1,
//     src:"/p1.png",
//     header:'The north coat',
//     price:"$260",
//     delprice:"$360",
//     star:'⭐⭐⭐⭐ (75)'
    
    
    
    
//     },
    
    
//     {
//         id:2,
//         src:"/p2.png",
//         header:'Gucci duffle bag',
//         price:"$960",
//         delprice:"$1160",
//         star:'⭐⭐⭐⭐ (88)'
        
        
        
        
//         },
        
//     {
//         id:3,
//         src:"/p3.png",
//         header:'RGB liquid CPU Cooler',
//         price:"$160",
//         delprice:"$170",
//         star:'⭐⭐⭐⭐ (99)'
        
        
        
        
//         },
        
//     {
//         id:4,
//         src:"/p4.png",
//         header:'Small BookSelf ',
//         price:"$360",
//         delprice:"$400",
//         star:'⭐⭐⭐⭐ (99)'
        
        
        
        
//         },
    
    
//     ]


// const Products = () => {
//   return (
// <Wrapper>

// <section>

// <main>

// <div className='flex  gap-3 items-center'>
// <Image src={'/rec.png' } alt='' height={20} width={20}/>
// <h3 className='text-red-500 font-bold'>This Month</h3>



// </div>
// <div className='flex justify-between items-center'>
// <div className='flex gap-x-12 mt-4'>

// <h4 className=' text-xl font-bold'>Best Selling Products</h4>
// </div>
// <div className='px-6'>
// <Button text='View All '/>
// </div>

// </div>




// <div className='container grid  grid-cols-2 md:grid-cols-4 gap-x-1 mt-11 '>
// {
// products.map((item)=>{
// return(

// <div key={item.id}>
// <Image src={item.src} alt='' height={200} width={200} className='hover:scale-105 duration-300'/>
// <h3>{item.header}</h3>
// <h4 className='text-red-400 font-bold'>{item.price}</h4>
// <span> <del>{item.delprice}</del></span>
// <p>{item.star}</p>


// </div>


// )


// })


// }


// </div>



// </main>


// </section>



// </Wrapper>
//   )
// }

// export default Products






































import React from 'react'
import Wrapper from '../shareable/wrapper'
import Image from 'next/image'
import Button from '../shareable/Button'

const products = [
  {
    id: 1,
    src: "/p1.png",
    header: 'The north coat',
    price: "$260",
    delprice: "$360",
    star: '⭐⭐⭐⭐ (75)',
  },
  {
    id: 2,
    src: "/p2.png",
    header: 'Gucci duffle bag',
    price: "$960",
    delprice: "$1160",
    star: '⭐⭐⭐⭐ (88)',
  },
  {
    id: 3,
    src: "/p3.png",
    header: 'RGB liquid CPU Cooler',
    price: "$160",
    delprice: "$170",
    star: '⭐⭐⭐⭐ (99)',
  },
  {
    id: 4,
    src: "/p4.png",
    header: 'Small BookSelf ',
    price: "$360",
    delprice: "$400",
    star: '⭐⭐⭐⭐ (99)',
  },
]

const Products = () => {
  return (
    <Wrapper>
      <section>
        <main>

          <div className='flex gap-3 items-center'>
            <Image src={'/rec.png'} alt='' height={20} width={20} />
            <h3 className='text-red-500 font-bold'>This Month</h3>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <h4 className='text-xl font-bold'>Best Selling Products</h4>
            <div className='px-6'>
              <Button text='View All' />
            </div>
          </div>

          {/* Grid Section */}
          <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mt-11'>
            {products.map((item) => (
              <div key={item.id} className='bg-gray-200 p-4 rounded-md text-center'>
                <Image
                  src={item.src}
                  alt=''
                  height={200}
                  width={200}
                  className='hover:scale-105 duration-300 mx-auto'
                />
                <h3 className='mt-3 text-sm sm:text-base'>{item.header}</h3>
                <h4 className='text-red-400 font-bold text-sm sm:text-base'>{item.price}</h4>
                <span className='block text-xs sm:text-sm'>
                  <del>{item.delprice}</del>
                </span>
                <p className='mt-1 text-xs sm:text-sm'>{item.star}</p>
              </div>
            ))}
          </div>

        </main>
      </section>
    </Wrapper>
  )
}

export default Products








