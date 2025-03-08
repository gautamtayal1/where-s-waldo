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
import { Link } from 'react-router'


import FindImageComponent from './FindImageComponent'

const GuideComp = ({page}) => { 

  const dataset ={
    party : {
      person1: ['Alex', partyImage1],
      person2: ['Jenna', partyImage2],
      person3: ['Marcus', partyImage3],
    },
    concert : {
      person1: ['Taylor', concertImage1],
      person2: ['Jordan', concertImage2],
      person3: ['Casey', concertImage3],
    },
    garden : {
      person1: ['Evelyn', gardenImage1],
      person2: ['Leo', gardenImage2],
      person3: ['Maya', gardenImage3],
    },
  }
  

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl mb-10 mt-5'>{`The ${page}`}</h1>
      <p className='text-xl mb-5'>People to find</p>
      <div className=''>
        {<FindImageComponent dataset={dataset[page]}/>}
      </div>
      <div className='flex gap-5'>
      <Link to='/home' className="btn btn-warning mt-5">Change Spot</Link>
      <button className="btn btn-success mt-5">Play Now</button>
      </div>
    </div>
  )
}

export default GuideComp
