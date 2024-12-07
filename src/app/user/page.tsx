import Button from '@/components/shareable/Button'
import Wrapper from '@/components/shareable/wrapper'
import React from 'react'

const Userpage = () => {
  return (
    <Wrapper>


<section>


<main className='flex  md:gap-x-96 flex-col md:flex-row'>



<div>

<div>

<h3 className='text-xl font-bold'>Manage My Account</h3>

<h4 className='text-red-500 mt-2 font-bold'>My Profile</h4>

<p>Address Book</p>
<p>My Payment Options</p>


</div>
<div className='mt-9'>

<h4 className='text-xl font-bold'>My Orders</h4>
<p className='mt-2'>My Returns</p>
<p>My Cancellations</p>

</div>
<div className='mt-6'>

    <h4 className='text-xl font-bold'>My WishList</h4>
</div>


</div>

<form className='mt-6'>

<h2>Edit Your Profile</h2>

<p className='mt-6'>First Name
    
</p>
<input type="text" required className='border-2 bg-gray-200  rounded-sm w-64 md:w-96 h-12'/>

<p>Last Name
    
</p>
<input type="text" required className='border-2 bg-gray-200  rounded-sm w-64 md:w-96 h-12'/>


<p>Email
    
</p>
<input type="text" required className='border-2 bg-gray-200  rounded-sm w-64 md:w-96 h-12'/>


<p>Address
    
</p>
<input type="text" required className='border-2 bg-gray-200  rounded-sm w-64 md:w-96  h-12 '/>


<h3 className='mt-10'>Password Changes</h3>

<input type="text" placeholder='Current Password'  required className='border-2 bg-gray-200  rounded-sm mt-2 w-80 md:w-[700px] h-12'/>
<br />
<input type="text" placeholder='New Passwod'  required className='border-2 bg-gray-200  rounded-sm mt-6 w-80 md:w-[700px] h-12'/>
<br />
<input type="text" placeholder='Confirm New Passwod'  required className='border-2 bg-gray-200  rounded-sm mt-5 w-80 md:w-[700px] h-12'/>

<div className='flex justify-center gap-x-9 items-center mt-4'>
<span className='font-semibold'>Cancel</span>
<Button text='Save Changes' />
</div>

</form>


</main>


</section>




    </Wrapper>
  )
}

export default Userpage