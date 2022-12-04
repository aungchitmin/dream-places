import React from 'react'
import Card from './Card'
import data from "../lib/data"

const HaveBeen = () => {
  return (
    <div className='want-to-wrapper mb-5 container mx-auto'>
        <h1 className='text-3xl font-normal text-left mb-5 pl-10'>Places I Have Beeeen To...</h1>
        <div className='cards-wrappper flex flex-wrap'>
        {data?.map(item => {
            return <Card info={item} key={item.id}/>
        })}
        </div>
    </div>
  )
}

export default HaveBeen