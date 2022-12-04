import React from 'react'
import Card from './Card'
import data from "../lib/data"

const WantTo = () => {
  return (
    <div className='want-to-wrapper container mx-auto mb-5'>
        <h1 className='text-3xl font-normal pl-10 text-left mb-5'>Places I want to GO...</h1>
        <div className='cards-wrappper flex flex-wrap'>
        {data?.map(item => {
            return <Card info={item} key={item.id}/>
        })}
        </div>
    </div>
  )
}

export default WantTo