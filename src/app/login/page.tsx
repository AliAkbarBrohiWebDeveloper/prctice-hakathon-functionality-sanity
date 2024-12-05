import Wrapper from "@/components/shareable/wrapper"
import Image from "next/image"


const LoginPage = () => {
  return (
    <Wrapper>

<section className="mt-6">

<main className="flex justify-evenly items-center flex-col md:flex-row">

<div>

<Image src={'/signup.png'} alt="" height={500} width={500}/>


</div>

<div>

<h5 className="text-2xl font-bold">Log in to Exclusive</h5>
<p className="mt-3">Enter your details below</p>

<form action="" className="mt-5">



<input type="email"  placeholder="Enter Your  Phone Number" required className="border-b-2 w-auto mt-3"/>
<br />
<input type="password"  placeholder="Password" required className="border-b-2 w-auto mt-3"/>

<br />

<button className="mt-5 px-6 py-2 bg-red-500 text-white font-bold hover:scale-105 duration-300"> Login</button>
<span className="ml-6 text-red-500 cursor-pointer ">Forgot password?</span>







</form>

</div>



</main>


</section>



    </Wrapper>

  )
}

export default LoginPage