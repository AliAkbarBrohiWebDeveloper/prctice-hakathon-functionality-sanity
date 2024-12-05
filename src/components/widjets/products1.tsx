// import React from 'react';
// import Wrapper from '../shareable/wrapper';
// import Image from 'next/image';
// import Button from '../shareable/Button';

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

// const Products1 = () => {
//   return (
//     <Wrapper>
//       <section>
//         <main>
//           <div className="flex gap-3 items-center">
//             <Image src="/rec.png" alt="Icon" height={20} width={20} />
//             <h3 className="text-red-500 font-bold">Our Products</h3>
//           </div>
//           <div className="flex justify-between items-center">
//             <h4 className="text-xl font-bold mt-4">Explore Our Products</h4>
//           </div>
//           <div className="container grid grid-cols-2 md:grid-cols-4 gap-x-1 mt-11">
//             {products.map((item) => {
//               return (
//                 <div key={item.id}>
//                   <Image
//                     src={item.src}
//                     alt={item.header}
//                     height={200}
//                     width={200}
//                     className="hover:scale-105 transition-all duration-300"
//                   />
//                   <h3>{item.header}</h3>
//                   <h4 className="text-red-400 font-bold">{item.price}</h4>
//                   <span><del>{item.delprice}</del></span>
//                   <p>{item.star}</p>
//                 </div>
//               );
//             })}
//           </div>

//           <div  className='text-center mt-5'>
// <Button text='View All products'/>


//           </div>
//         </main>
//       </section>
//     </Wrapper>
//   );
// };

// export default Products1;








































import React from 'react';
import Wrapper from '../shareable/wrapper';
import Image from 'next/image';
import Button from '../shareable/Button';

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

const Products1 = () => {
  return (
    <Wrapper>
      <section>
        <main>
          {/* Section Header */}
          <div className="flex gap-3 items-center">
            <Image src="/rec.png" alt="Icon" height={20} width={20} />
            <h3 className="text-red-500 font-bold">Our Products</h3>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h4 className="text-xl font-bold">Explore Our Products</h4>
          </div>

          {/* Product Grid */}
          <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-11">
            {products.map((item) => {
              return (
                <div key={item.id} className="bg-gray-200 p-4 text-center rounded-lg shadow-md">
                  <Image
                    src={item.src}
                    alt={item.header}
                    height={200}
                    width={200}
                    className="mx-auto hover:scale-105 transition-all duration-300"
                  />
                  <h3 className="mt-3 text-sm sm:text-base">{item.header}</h3>
                  <h4 className="text-red-400 font-bold text-sm sm:text-base">{item.price}</h4>
                  <span className="block text-xs sm:text-sm"><del>{item.delprice}</del></span>
                  <p className="text-xs sm:text-sm mt-2">{item.star}</p>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <div className="text-center mt-8">
            <Button text="View All Products" />
          </div>
        </main>
      </section>
    </Wrapper>
  );
};

export default Products1;






