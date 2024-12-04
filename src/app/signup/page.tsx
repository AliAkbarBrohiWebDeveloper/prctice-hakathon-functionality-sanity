import Wrapper from "@/components/shareable/wrapper"
import Image from "next/image"


const SignUp = () => {
  return (
    <Wrapper>

<section className="mt-6">

<main className="flex justify-evenly items-center flex-col md:flex-row">

<div>

<Image src={'/signup.png'} alt="" height={500} width={500}/>


</div>

<div>

<h5 className="text-2xl font-bold">Create an Account</h5>
<p className="mt-3">Enter your details below</p>

<form action="" className="mt-5">

<input type="text"placeholder="Name" required className="border-b-2 w-auto" />
<br />
<input type="email"  placeholder="Email or Phone Number" required className="border-b-2 w-auto mt-3"/>
<br />
<input type="password"  placeholder="Password" required className="border-b-2 w-auto mt-3"/>
<p className="mt-5 px-6 py-2 bg-red-500 text-white font-bold">Create Account</p>

<p className="mt-3">Already have account? Login!</p>


</form>

</div>



</main>


</section>



    </Wrapper>

  )
}

export default SignUp