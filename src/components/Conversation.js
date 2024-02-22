import React from 'react'
import ConvBoxes from './ConvBoxes'

const Conversation = () => {
  return (
    <div className='max-w-96 w-[20%] border rounded-sm'>
    <div className='flex border p-3 items-center justify-between'>
        <button className='font-medium size-5'>=</button>
        <h1 className='font-medium text-xl '>Conversations</h1>
        <button className='font-medium'>⟲</button>
    </div>
    <ConvBoxes name="Elon" review='Nice Product' type='Facebook DM' message='do you have any web servi' time="10m"/>
    <ConvBoxes name="Amit RG" review='Product quantity' type='Facebook DM' message='Is it in the stock right now , Its not even worthy ....'  time="20m"/>
    <ConvBoxes name="Hitesh" review='Available in Store' type='Facebook post' message='Hi do you have any tshirt available' time="35m" />
</div>
  )
}

export default Conversation

