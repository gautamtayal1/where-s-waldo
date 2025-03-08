import React from 'react'
import { Link, useParams } from 'react-router'
import FindImageComponent from './FindImageComponent'
import concertImg from '../assets/concert.jpg'
import partyImg from '../assets/party.png'
import gardenImg from '../assets/office.jpg'

const GamePage = () => {

  const page = useParams()
  const {id}= page
  console.log(id)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("clicked handled")
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left)/ rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top)/ rect.height) * 100);
    console.log(x, y);
    
  }

  const imageLink = () =>{
    if(id == 'concert'){
      return concertImg
    }else if(id == 'party'){
      return partyImg
    }else if(id == 'garden'){
      return gardenImg
  }}

  return (
    <div>
      <div className='timer h-[12vh] flex justify-center items-center'>
        <div className='text-4xl text-primary font-bold'>
          01:03
        </div>
      </div>
      <div className="people">
        <FindImageComponent page = {id}/>
      </div>

      <div className="image flex justify-center items-center">
        <img src={imageLink()} alt="" 
        className='h-[120vh] w-[98vw] rounded'
        onClick={handleClick}/>
      </div>
    <div className='flex justify-center items-center'>
     <Link to="/home" className="exit btn bg-secondary my-5">Exit</Link>
    </div>
      
    </div>
  )

}

export default GamePage