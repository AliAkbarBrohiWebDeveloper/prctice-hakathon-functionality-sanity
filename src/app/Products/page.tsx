
// import React from 'react'

// import Image from 'next/image'
// import Button from '@/components/shareable/Button'
// import Wrapper from '@/components/shareable/wrapper'
// import Link from 'next/link'

// const products = [
//   {
//     id: 1,
//     src: "/p1.png",
//     header: 'The north coat',
//     price: "$260",
//     delprice: "$360",
//     star: '⭐⭐⭐⭐ (75)',
//   },
//   {
//     id: 2,
//     src: "/p2.png",
//     header: 'Gucci duffle bag',
//     price: "$960",
//     delprice: "$1160",
//     star: '⭐⭐⭐⭐ (88)',
//   },
//   {
//     id: 3,
//     src: "/p3.png",
//     header: 'RGB liquid CPU Cooler',
//     price: "$160",
//     delprice: "$170",
//     star: '⭐⭐⭐⭐ (99)',
//   },
//   {
//     id: 4,
//     src: "/p4.png",
//     header: 'Small BookSelf ',
//     price: "$360",
//     delprice: "$400",
//     star: '⭐⭐⭐⭐ (99)',
//   },
// ]

// const Products = () => {
//   return (
//     <Wrapper>
//       <section className='mt-9'>
//         <main>

//           <div className='flex gap-3 items-center '>
//             <Image src={'/rec.png'} alt='' height={20} width={20} />
//             <h3 className='text-red-500 font-bold'>This Month</h3>
//           </div>

//           <div className='flex justify-between items-center mt-4'>
//             <h4 className='text-xl font-bold'>Best Selling Products</h4>
//             <div className='px-6'>
//               <Button text='View All' />
//             </div>
//           </div>

        
//           <div className='flex justify-center items-center flex-col md:flex-row gap-x-6 gap-y-6'>
//             {products.map((item) => (
//               <div key={item.id} className=' p-4 rounded-md text-center lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group'>
//                 <div className='lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative'>
//                 <Image
//                   src={item.src}
//                   alt=''
//                   height={200}
//                   width={200}
//                   className='hover:scale-105 duration-300 mx-auto  lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]'
//                 />

// <Link href={`/products/${item.id}`}>
//                   <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
//                     <p className="text-[12px] md:text-[16px] font-medium">Add to Cart</p>
//                   </div>
//                 </Link>




//                 </div>



//                 <h3 className='mt-3 text-sm sm:text-base'>{item.header}</h3>
//                 <h4 className='text-red-400 font-bold text-sm sm:text-base'>{item.price}</h4>
//                 <span className='block text-xs sm:text-sm'>
//                   <del>{item.delprice}</del>
//                 </span>
//                 <p className='mt-1 text-xs sm:text-sm'>{item.star}</p>
//               </div>
//             ))}
//           </div>

//         </main>
//       </section>
//     </Wrapper>
//   )
// }

// export default Products






















import React from 'react'
import Image from 'next/image'
import Button from '@/components/shareable/Button'
import Wrapper from '@/components/shareable/wrapper'
import Link from 'next/link'

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
      <section className='mt-9'>
        <main>
          <div className='flex gap-3 items-center '>
            <Image src={'/rec.png'} alt='' height={20} width={20} />
            <h3 className='text-red-500 font-bold'>This Month</h3>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <h4 className='text-xl font-bold'>Best Selling Products</h4>
            <div className='px-6'>
              <Button text='View All' />
            </div>
          </div>

          {/* Flexbox Layout for Products */}
          <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {products.map((item) => (
              <div key={item.id} className='p-4 rounded-md text-center w-full sm:w-[200px] md:w-[240px] lg:w-[270px] h-auto relative group'>
                
                {/* Product Image and Hover Effect */}
                <div className='bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative'>
                  <Image
                    src={item.src}
                    alt={item.header}
                    height={200}
                    width={200}
                    className='hover:scale-105 transition-all duration-300 mx-auto lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]'
                  />

                  <Link href={`/products/${item.id}`}>
                    <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[12px] md:text-[16px] font-medium">Add to Cart</p>
                    </div>
                  </Link>
                </div>

                {/* Product Details */}
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




