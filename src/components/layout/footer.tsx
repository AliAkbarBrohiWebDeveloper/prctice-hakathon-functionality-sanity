import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

const Footer = () => {
  return (
<footer className='bg-black text-white mt-10  h-auto px-6  mx-auto max-w-screen-2xl'>

<div className='container grid grid-cols-1 md:grid-cols-5 py-24'>
<div>

<ul>


    <li className='text-xl font-bold'>
    Exclusive
    </li>
    <li className='mt-3'>Subscribe</li>
    <li>Get 10% off your first order</li>
    <li className='mt-3'>
<input type="email" placeholder='Enter you Email' className='w-aut rounded-lg text-xl ' />


    </li>
</ul>


</div>

<div>


    <ul>


        <li className='text-xl font-bold'>Support</li>
        <li className='mt-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
    </ul>
</div>
<div>

    <ul>
        <li className='text-xl font-bold'>Account</li>
        <li className='mt-3'>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
    </ul>
</div>
<div>

    <ul>

        <li className='text-xl font-bold'>

        Quick Link
        </li>
        <li className='mt-3'>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
    </ul>
</div>
<div>
    <ul>
        <li className='text-xl font-bold'>Download App</li>
        <li className='mt-3'>Save $3 with App New User Only</li>
<div className='flex gap-x-5 items-center mt-3 text-3xl font-bold'>
        <BiLogoFacebook />
        <BiLogoTwitter/>
        <BiLogoInstagram/>
        <BiLogoLinkedin/>
</div>
<div className='mt-3'>

<Image src={'/FooterImage.png'} alt='' width={150} height={100}/>


</div>

    </ul>
</div>



</div>





</footer>





  )
}

export default Footer