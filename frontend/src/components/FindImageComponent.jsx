import React from 'react'
import partyImage1 from '../assets/party1.png'
import partyImage2 from '../assets/party2.png'
import partyImage3 from '../assets/party3.png'
import concertImage1 from '../assets/concert1.png'
import concertImage2 from '../assets/concert2.png'
import concertImage3 from '../assets/concert3.png'
import gardenImage1 from '../assets/office1.png'
import gardenImage2 from '../assets/office2.png'
import gardenImage3 from '../assets/office3.png'

const FindImageComponent = ({page}) => {

  const dataset ={
    party : {
      person1: ['Jenna', partyImage1],
      person2: ['Alex', partyImage2],
      person3: ['Marcus', partyImage3],
    },
    concert : {
      person1: ['Taylor', concertImage1],
      person2: ['Casey', concertImage2],
      person3: ['Jordan', concertImage3],
    },
    garden : {
      person1: ['Evelyn', gardenImage1],
      person2: ['Leo', gardenImage2],
      person3: ['Jen', gardenImage3],
    },
  }

  return (
    
    <div className='relative flex justify-center items-center gap-10 p-4'>
      {Object.values(dataset[page]).map((data, index) => (
        <div key={index}>
        <div className='h-[80px] w-[50px] cursor-pointer'>
          <img 
          src={data[1]} 
          alt="party" 
          className='h-[80px] w-[50px] rounded-[10px] cursor-pointer'
          
          />
        </div>
        <p>{data[0]}</p>
        </div>
      
    ))}
    </div>
    
   
  )
}

export default FindImageComponent
