import Image from 'next/image';

export default function NewArrivalSection() {
  return (
    <section className="p-8">



<div className='flex  gap-3 items-center'>
<Image src={'/rec.png' } alt='' height={20} width={20}/>
<h3 className='text-red-500 font-bold'>Featured</h3>

</div>
<div className='flex gap-x-12 mt-4'>

<h4 className=' text-xl font-bold'>New Arrival</h4>
</div>
      




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        
        <div className="relative group">
          <Image
            src="/ps5.png" 
            alt="PlayStation 5"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-semibold">PlayStation 5</h3>
            <p className="text-white">Black and white version of the PS5</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded">Shop Now</button>
          </div>
        </div>

      
        <div className="relative group">
          <Image
            src="/womens.png" 
            alt="Women's Collection"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-semibold">Women's Collections</h3>
            <p className="text-white">Explore our latest collections</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded">Shop Now</button>
          </div>
        </div>

        
        <div className="relative group">
          <Image
            src="/speakers.png" 
            alt="Speakers"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-semibold">Speakers</h3>
            <p className="text-white">Amazon wireless speakers</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded">Shop Now</button>
          </div>
        </div>

        
        <div className="relative group">
          <Image
            src="/perfume.png" 
            alt="Perfume"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-semibold">Perfume</h3>
            <p className="text-white">GUCCI INTENSE OUD EDP</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded">Shop Now</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}