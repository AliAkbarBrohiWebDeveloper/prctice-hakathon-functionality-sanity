import Arrival from '@/components/widjets/Arrival'
import Category from '@/components/widjets/category'
import Experience from '@/components/widjets/experience'
import Hero from '@/components/widjets/hero'


import Sales from '@/components/widjets/sales'
import Services from '@/components/widjets/services'

import React from 'react'
import Products from './Products/page'
import Productses from './Products1/page'

const page = () => {
  return (
    <div>
<Hero/>
<Sales/>
{/* <Category/> */}

<Products/>
{/* <Experience/> */}

<Productses/>
{/* <Arrival/> */}
{/* <Services/> */}


    </div>
  )
}

export default page