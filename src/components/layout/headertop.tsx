
import Wrapper from "../shareable/wrapper"

const HeaderTop = () => {
  return (


    <Wrapper>
<header>


    <main className=" flex justify-evenly items-center flex-col md:flex-row bg-black text-white h-20 md:h-12 ">

        <div  className='text-center text-sm  '>
<h5  className="text-white text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 

<button className=" font-bold underline ml-2">Shop Now</button>


</h5>


    </div>
<select className="bg-[#000000] text-white mt-2">

<option value="English">English</option>
<option value={'Urdu'}> Urdu</option>

</select>

    </main>
</header>
</Wrapper>
  )
}

export default HeaderTop