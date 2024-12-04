import Button from '@/components/shareable/Button'
import Wrapper from '@/components/shareable/wrapper'
import Image from 'next/image'


const ContactPage = () => {
  return (
    <Wrapper>


        <section className='mt-14'>

<main className='flex justify-between items-center gap-x-9 flex-col md:flex-row '>
    <div>
<div className='flex items-center gap-3'>

<Image src={'/icons.png'} alt='' width={50} height={50}/>
<span>Call To Us</span>

</div>
<h5>We are available 24/7, 7 days a week.</h5>
<p>Phone: +8801611112222</p>

<div className='flex items-center gap-3 mt-28'>

<Image src={'/icon2.png'} alt='' width={50} height={50}/>
<span>Write to us</span>

</div>
<h5>We are available 24/7, 7 days a week.</h5>
<p>Phone: +8801611112222</p>

</div>




<form  className='mt-10'>
<input type="text " placeholder=' your Name'  required className='bg-gray-200  rounded-sm   w-full md:w-auto h-12'/>
<input type="text"  placeholder='your Email' required className=' bg-gray-200  rounded-sm ml-0 md:ml-5 w-full md:w-auto mt-24 md:mt-3 h-12'/>

<input type="text" placeholder='Your Phone'  className=' bg-gray-200  rounded-sm ml-0 md:ml-5 w-full md:w-auto mt-24 md:mt-3 h-12'/>
<br />


<textarea name="" id="" placeholder='Your message' rows={6}  className=' bg-gray-200  rounded-sm  w-full mt-24 md:mt-3'></textarea>

<Button text='Send Message'/>




</form>


</main>


        </section>
    </Wrapper>
  )
}

export default ContactPage