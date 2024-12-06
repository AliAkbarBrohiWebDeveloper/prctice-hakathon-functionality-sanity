
import Image from 'next/image'
import Wrapper from '../shareable/wrapper'



const Hero = () => {
  return (
    <Wrapper>

<section className='mt-16'>
<main className='flex justify-between items-center gap-x-6 flex-col md:flex-row mx-auto'>

<div>
<ul className=' hidden md:block'>
<li>Womans Fashion</li>
<li>Mens Fashion</li>
<li> Electronics</li>
<li>Home & Lifestyle</li>
<li>Medicine</li>
<li>Sports & Outdoor</li>
<li>Babys & Toys</li>
<li>Groceries & Pets</li>
<li>Health & Beauty</li>



</ul>


</div>


<div className='bg-black w-[390px] md:w-[770px] h-[240px] md:h-[340px] text-white mx-3 '>

    <div className='flex justify-evenly items-center'>


<div className='ml-[40px] md:ml-6'>

<div className='flex gap-x-3'>

<Image src={'/apple.png'} alt='applelogo' height={10} width={20}/>
<span>iPhone 14 Series</span>

</div>

<h1 className=' md:text-4xl mt-6 text-xl'>Up to 10% off Voucher</h1>
<div className='flex items-center'>
<p className='mt-6 text-xl underline'>Shop Now</p>

<Image src={'/Vector5.png'} alt='' height={20} width={20} className='mt-6 ml-3 mr-12 md:mr-0'/>



</div>


</div>

<Image src={'/hero.png'} alt='' height={200} width={300} className='mr-40 mt-14 w-[150px]  h-[130px] md:w-[300px] md:h-[200px]'/>


    </div>





</div>

</main>



</section>


    </Wrapper>
  )
}

export default Hero




























// import Image from 'next/image'
// import Wrapper from '../shareable/wrapper'

// const Hero = () => {
//   return (
//     <Wrapper>
//       <section className='mt-16'>
//         <main className='flex justify-between items-center gap-x-6 flex-col md:flex-row mx-auto'>
          
        
//           <div className='w-full md:w-auto'>
//             <ul className='hidden md:block'>
//               <li>Womans Fashion</li>
//               <li>Mens Fashion</li>
//               <li>Electronics</li>
//               <li>Home & Lifestyle</li>
//               <li>Medicine</li>
//               <li>Sports & Outdoor</li>
//               <li>Babys & Toys</li>
//               <li>Groceries & Pets</li>
//               <li>Health & Beauty</li>
//             </ul>
//           </div>

          
//           <div className='bg-black text-white w-full md:w-[770px] h-auto md:h-[340px] mx-3 p-6 flex flex-col md:flex-row justify-between items-center'>
            
            
//             <div className='text-center md:text-left'>
//               <div className='flex justify-center md:justify-start gap-x-3'>
//                 <Image src={'/apple.png'} alt='apple logo' height={10} width={20} />
//                 <span>iPhone 14 Series</span>
//               </div>
//               <h1 className='md:text-4xl text-xl mt-6'>Up to 10% off Voucher</h1>
//               <p className='mt-6 text-xl underline cursor-pointer'>Shop Now</p>
//             </div>

            
//             <div className='mt-6 md:mt-0'>
//               <Image src={'/hero.png'} alt='' height={200} width={300} className='mx-auto md:mx-0' />
//             </div>

//           </div>

//         </main>
//       </section>
//     </Wrapper>
//   )
// }

// export default Hero









