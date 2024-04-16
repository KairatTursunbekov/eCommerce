import React from 'react'
import { Card } from '../Card/Сard'
import { data } from '../data'

export const Items = () => {
    console.log(data)
  return (
    <div className='main'>
        {
            data.productName.map((item, id)=> {
                return <Card 
                item= {item} 
                img={item.img} 
                desc={item.desc} 
                title={item.title} 
                price={item.price} 
                key={id} 
                />
            })
        }
    </div>
  )
}
