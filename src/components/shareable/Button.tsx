import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div className=''> 
    
    <button className='bg-red-500 py-3 px-7 rounded-sm hover:shadow-lg font-medium text-white hover:scale-105 duration-300'> {text}</button>
    
  
</div>
  )
}

export default Button