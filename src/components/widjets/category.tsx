
import React from 'react';
import Wrapper from '../shareable/wrapper';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    src: "/C1.png",
    header: "Phones"
  },
  {
    id: 2,
    src: "/C2.png",
    header: "Computers"
  },
  {
    id: 3,
    src: "/C3.png",
    header: "SmartWatch"
  },
  {
    id: 4,
    src: "/Vector1.png",
    header: "Camera"
  },
  {
    id: 5,
    src: "/C5.png",
    header: "HeadPhones"
  },
  {
    id: 6,
    src: "/C6.png",
    header: "Gaming"
  }
];

const Category = () => {
  return (
    <Wrapper>
      <section className='mt-28'>
        <main>
          <div className='flex gap-3 items-center'>
            <Image src={'/rec.png'} alt='' height={20} width={20} />
            <h3 className='text-red-500 font-bold'>Categories</h3>
          </div>

          <div className='mt-5 text-3xl font-bold'>
            <h3>Browse By Category</h3>
          </div>

        
          <div className='container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-6 gap-6'>
            {categories.map((item) => (
              <div
                key={item.id}
                className='border-2 hover:text-white hover:bg-rose-600 flex flex-col items-center p-4 rounded-lg transition-all duration-300'
              >
                <Image
                  src={item.src}
                  alt={item.header}
                  width={100}
                  height={100}
                  className='mx-auto mb-4'
                />
                <h4 className='text-center font-bold text-sm md:text-base'>{item.header}</h4>
              </div>
            ))}
          </div>
        </main>
      </section>
    </Wrapper>
  );
};

export default Category;











