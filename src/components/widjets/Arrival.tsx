import Image from 'next/image';
import Wrapper from '../shareable/wrapper';

export default function NewArrivalSection() {
  return (
    <Wrapper>
    <section className="mt-9">



<div className='flex  gap-3 items-center'>
<Image src={'/rec.png' } alt='' height={20} width={20}/>
<h3 className='text-red-500 font-bold'>Featured</h3>

</div>
<div className='flex gap-x-12 mt-4'>

<h4 className=' text-xl font-bold'>New Arrival</h4>
</div>
      




<main className="flex  gap-x-9 flex-col md:flex-row">

<div className="  bg-black h-[600px] w-[370px] md:w-[570px] rounded-sm">


<div className="text-white mx-3">


<Image src={'/b1.png'} alt="" height={500} width={500}/>
<h2 className="text-xl font-bold mt-5">PlayStation 5</h2>
<p className="mt-1">Black and White version of the PS5 coming out on sale.</p>
<span className="mt-3 underline">Shop Now</span>

</div>




</div>

<div className=" bg-black w-[350px] md:w-[570px] md:h-[284px] h-[170px] mt-9">

<div className="flex justify-evenly items-center">
<div className="text-white mx-5">

<h3 className="text-xl font-bold">Womens Collections</h3>
<p className="mt-1">Featured woman collections that give you another vibe.</p>
<span className="mt-3 underline">Shop Now </span>

</div>



<div>
<Image src={'/b2.png'} height={286} width={432} alt=""/>


</div>
</div>

<div className=" flex  flex-col md:flex-row items-center gap-y-12 gap-x-6 mt-36 text-white">
<div className="bg-black w-[270px] h-[300px]">

<div className="mx-6">

<Image src={'/b3.png'} alt="" height={221} width={190}/>

<h3 className="text-xl font-bold">Speakers</h3>
<p className="mt-1">Amazon wireless speakers</p>
<span className="underline mt-3">Shop Now</span>

</div>


</div>

<div className="bg-black w-[270px] h-[296px]">

<div className="mx-6">
<Image src={'/b4.png'} alt="" height={222}width={210} />
<h3 className="text-xl font-bold">Perfume</h3>
<p className="mt-1">GUCCI INTENSE OUD EDP</p>
<span className="underline mt-3">Shop Now</span>


</div>



</div>



</div>
</div>

</main>


    </section>
    </Wrapper>
  );
}