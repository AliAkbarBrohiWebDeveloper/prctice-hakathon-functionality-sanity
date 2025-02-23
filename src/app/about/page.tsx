
import Services from "@/components/widjets/services"
import Image from "next/image"
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi"

const Aboutpage = () => {
  return (

    <section className="mt-20">

      <main className="flex justify-center items-center flex-col md:flex-row">


        <div className="px-3">
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p className="mt-6">Launced in 2015, Exclusive is South Asia,s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="mt-3">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>


        </div>
        <div>



          <Image src={'/aboutposter.png'} alt="" height={1000} width={1000} />
        </div>

      </main>

      <div className="flex  justify-center items-center gap-x-5 mt-16 flex-col md:flex-row">
        <div className="border-2 text-center hover:bg-red-500 hover:text-white w-[200px] h-[150px] mt-3">

          <Image src={'/Sv1.png'} alt="" width={50} height={50} className="ml-16" />
          <h3 className="text-xl font-bold mt-4">10.5k </h3>
          <p className="mt-3">Sallers active our site</p>

        </div>
        <div className="border-2 text-center  hover:bg-red-500 hover:text-white w-[200px] h-[150px] mt-3">

          <Image src={'/Sv2.png'} alt="" width={50} height={50} className="ml-16" />
          <h3 className="text-xl font-bold mt-4">33k</h3>
          <p>Mopnthly Produduct Sale</p>

        </div>
        <div className="border-2 text-center  hover:bg-red-500 hover:text-white w-[200px] h-[150px] mt-3">

          <Image src={'/Sv3.png'} alt="" width={50} height={50} className="ml-16" />
          <h3 className="text-xl font-bold mt-4">45.5k</h3>
          <p>Customer active in our site</p>
        </div>
        <div className="border-2 text-center  hover:bg-red-500 hover:text-white w-[200px] h-[150px] mt-3">
          <Image src={'/Sv4.png'} alt="" width={50} height={50} className="ml-16" />
          <h3 className="text-xl font-bold mt-4">25k</h3>
          <p>Anual gross sale in our site</p>
        </div>

      </div>



      <Services />

<div className="flex justify-evenly items-center gap-x-12 mt-20 flex-col md:flex-row">

<div>

<Image src={'/ab1.png'} alt="" height={200} width={200}/>
<h4 className="text-xl font-semibold">Tom Cruise</h4>
<p>Founder & Chairman</p>
<div className="flex gap-x-3 ">
<BiLogoTwitter/>
<BiLogoInstagram/>
<BiLogoLinkedin/>


</div>


</div>

<div className="mt-9">

<Image src={'/ab2.png'} alt="" height={200} width={200}/>
<h4 className="text-xl font-semibold">Emma Watson</h4>
<p>Managing Director</p>
<div className="flex  gap-x-3">
<BiLogoTwitter/>
<BiLogoInstagram/>
<BiLogoLinkedin/>


</div>


</div>
<div className="mt-9">

<Image src={'/ab3.png'} alt="" height={200} width={200}/>
<h4 className="text-xl font-semibold">Will Smith</h4>
<p>Product Designer</p>
<div className="flex gap-x-3">
<BiLogoTwitter/>
<BiLogoInstagram/>
<BiLogoLinkedin/>


</div>


</div>



</div>


<div className="flex justify-center items-center mt-6">

<Image src={'/dot.png'} alt="" height={16} width={112}/>

</div>



    </section>






  )
}

export default Aboutpage