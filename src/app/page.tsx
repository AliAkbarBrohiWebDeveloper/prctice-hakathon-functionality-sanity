import Arrival from '@/components/widjets/Arrival'
import Category from '@/components/widjets/category'
import Experience from '@/components/widjets/experience'
import Hero from '@/components/widjets/hero'
import Products from '@/components/widjets/products'
import Products1 from '@/components/widjets/products1'
import Sales from '@/components/widjets/sales'
import Services from '@/components/widjets/services'
import React from 'react'

const page = () => {
  return (
    <div>
<Hero/>
<Sales/>
<Category/>
<Products/>
<Experience/>
<Products1/>
<Arrival/>
<Services/>


    </div>
  )
}

export default page