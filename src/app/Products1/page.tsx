
// import React from 'react';

// import Image from 'next/image';

// import Wrapper from '@/components/shareable/wrapper';
// import Button from '@/components/shareable/Button';
// import Link from 'next/link';

// const products = [
//   {
//     id: 1,
//     src: "/Cart1.png",
//     header: 'Breed Dry Dog Food',
//     price: "$100",
//     delprice: "$360",
//     star: '⭐⭐⭐⭐ (75)'
//   },
//   {
//     id: 2,
//     src: "/Cart2.png",
//     header: 'CANON EOS DSLR Camera',
//     price: "$360",
//     delprice: "$460",
//     star: '⭐⭐⭐⭐ (88)'
//   },
//   {
//     id: 3,
//     src: "/Cart3.png",
//     header: 'ASUS FHD Gaming Laptop',
//     price: "$700",
//     delprice: "$870",
//     star: '⭐⭐⭐⭐ (99)'
//   },
//   {
//     id: 4,
//     src: "/Cart4.png",
//     header: 'Curology Product Set ',
//     price: "$500",
//     delprice: "$600",
//     star: '⭐⭐⭐⭐ (99)'
//   },
//   {
//     id: 5,
//     src: "/Cart5.png",
//     header: 'Kids Electric Car',
//     price: "$960",
//     delprice: "$1060",
//     star: '⭐⭐⭐⭐ (75)'
//   },
//   {
//     id: 6,
//     src: "/Cart6.png",
//     header: 'Jr. Zoom Soccer Cleats',
//     price: "$1160",
//     delprice: "$1260",
//     star: '⭐⭐⭐⭐ (88)'
//   },
//   {
//     id: 7,
//     src: "/Cart7.png",
//     header: 'GP11 Shooter USB Gamepad',
//     price: "$660",
//     delprice: "$770",
//     star: '⭐⭐⭐⭐ (99)'
//   },
//   {
//     id: 8,
//     src: "/Cart8.png",
//     header: 'Quilted Satin Jacket',
//     price: "$660",
//     delprice: "$700",
//     star: '⭐⭐⭐⭐ (99)'
//   }
// ];

// const Productses = () => {
//   return (
//     <Wrapper>
//       <section className='mt-10'>
//         <main>
          
//           <div className="flex gap-3 items-center">
//             <Image src="/rec.png" alt="Icon" height={20} width={20} />
//             <h3 className="text-red-500 font-bold">Our Products</h3>
//           </div>
//           <div className="mt-4">
//             <h4 className="text-xl font-bold">Explore Our Products</h4>
//           </div>

          
//           <div className="flex justify-center items-center flex-col md:flex-row gap-x-6 gap-y-6">
//             {products.map((item) => {
//               return (
//                 <div key={item.id} className=" p-4 text-center rounded-lg shadow-md   lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">

// <div className='lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative'>
//                   <Image
//                     src={item.src}
//                     alt={item.header}
//                     height={200}
//                     width={200}
//                     className="mx-auto hover:scale-105 transition-all duration-300"
//                   />

// <Link href={`/products/${item.id}`}>
//                   <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
//                     <p className="text-[12px] md:text-[16px] font-medium">Add to Cart</p>
//                   </div>
//                 </Link>

//                   </div>
//                   <h3 className="mt-3 text-sm sm:text-base">{item.header}</h3>
//                   <h4 className="text-red-400 font-bold text-sm sm:text-base">{item.price}</h4>
//                   <span className="block text-xs sm:text-sm"><del>{item.delprice}</del></span>
//                   <p className="text-xs sm:text-sm mt-2">{item.star}</p>
//                 </div>
//               );
//             })}
//           </div>

          
//           <div className="text-center mt-8">
//             <Button text="View All Products" />
//           </div>
//         </main>
//       </section>
//     </Wrapper>
//   );
// };

// export default Productses;




























import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/shareable/wrapper';
import Button from '@/components/shareable/Button';
import Link from 'next/link';

const products = [
  {
    id: 1,
    src: "/Cart1.png",
    header: 'Breed Dry Dog Food',
    price: "$100",
    delprice: "$360",
    star: '⭐⭐⭐⭐ (75)'
  },
  {
    id: 2,
    src: "/Cart2.png",
    header: 'CANON EOS DSLR Camera',
    price: "$360",
    delprice: "$460",
    star: '⭐⭐⭐⭐ (88)'
  },
  {
    id: 3,
    src: "/Cart3.png",
    header: 'ASUS FHD Gaming Laptop',
    price: "$700",
    delprice: "$870",
    star: '⭐⭐⭐⭐ (99)'
  },
  {
    id: 4,
    src: "/Cart4.png",
    header: 'Curology Product Set ',
    price: "$500",
    delprice: "$600",
    star: '⭐⭐⭐⭐ (99)'
  },
  {
    id: 5,
    src: "/Cart5.png",
    header: 'Kids Electric Car',
    price: "$960",
    delprice: "$1060",
    star: '⭐⭐⭐⭐ (75)'
  },
  {
    id: 6,
    src: "/Cart6.png",
    header: 'Jr. Zoom Soccer Cleats',
    price: "$1160",
    delprice: "$1260",
    star: '⭐⭐⭐⭐ (88)'
  },
  {
    id: 7,
    src: "/Cart7.png",
    header: 'GP11 Shooter USB Gamepad',
    price: "$660",
    delprice: "$770",
    star: '⭐⭐⭐⭐ (99)'
  },
  {
    id: 8,
    src: "/Cart8.png",
    header: 'Quilted Satin Jacket',
    price: "$660",
    delprice: "$700",
    star: '⭐⭐⭐⭐ (99)'
  }
];

const Productses = () => {
  return (
    <Wrapper>
      <section className='mt-10'>
        <main>
          <div className="flex gap-3 items-center">
            <Image src="/rec.png" alt="Icon" height={20} width={20} />
            <h3 className="text-red-500 font-bold">Our Products</h3>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold">Explore Our Products</h4>
          </div>

          {/* Flexbox Layout for Products */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {products.map((item) => (
              <div key={item.id} className="p-4 text-center rounded-lg shadow-md w-full sm:w-[200px] md:w-[240px] lg:w-[270px] h-auto relative group">

                {/* Product Image and Hover Effect */}
                <div className='bg-[#F5F5F5] rounded-[4px] flex justify-center items-center relative'>
                  <Image
                    src={item.src}
                    alt={item.header}
                    height={200}
                    width={200}
                    className="mx-auto hover:scale-105 transition-all duration-300"
                  />

                  <Link href={`/products/${item.id}`}>
                    <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[12px] md:text-[16px] font-medium">Add to Cart</p>
                    </div>
                  </Link>
                </div>

                {/* Product Details */}
                <h3 className="mt-3 text-sm sm:text-base">{item.header}</h3>
                <h4 className="text-red-400 font-bold text-sm sm:text-base">{item.price}</h4>
                <span className="block text-xs sm:text-sm"><del>{item.delprice}</del></span>
                <p className="text-xs sm:text-sm mt-2">{item.star}</p>
              </div>
            ))}
          </div>

          {/* View All Button */}
         <Link href={'/Products2'}> <div className="text-center mt-8 py-6 ">
            <Button text="View All Products" />
          </div>
          </Link>
        </main>
      </section>
    </Wrapper>
  );
};

export default Productses;



















