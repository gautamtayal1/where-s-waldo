import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import FindImageComponent from './FindImageComponent'
import concertImg from '../assets/concert.jpg'
import partyImg from '../assets/party.png'
import gardenImg from '../assets/office.jpg'

const GamePage = () => {

  const page = useParams()
  const {id}= page

  const [clicked, setClicked] = useState(false)


  const handleClick = (e) => {
    e.preventDefault()
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left)/ rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top)/ rect.height) * 100);
    setClicked(true)
    positionOverlay(x, y)
  }

  const positionOverlay = (x, y) => {
    const overlay = document.querySelector('.overlay')
    if (x < 75) {
      overlay.style.left = `${x}%`
    } else {
      overlay.style.left = `${x - 25}%`
    }
    if(y > 80){
      overlay.style.top = `${y - 20}%`
    } else{
      overlay.style.top = `${y}%`
    }
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
    <div className=''>
      <div className='timer h-[12vh] flex justify-center items-center'>
        <div className='text-4xl text-primary font-bold'>
          01:03
        </div>
      </div>
      <div className="people">
        <FindImageComponent page = {id}/>
      </div>

      <div className="image flex justify-center items-center relative">
        <img src={imageLink()} alt="" 
        className='h-[120vh] w-[98vw] rounded'
        onClick={handleClick}/>
        {clicked && 
          <div className=' overlay absolute w-auto h-auto bg-white border-2 border-black'>
            <FindImageComponent page={id}/>
          </div>
        }
      </div>
    <div className='flex justify-center items-center'>
     <Link to="/home" className="exit btn bg-secondary my-5">Exit</Link>
    </div>
    
    </div>
  )

}

export default GamePage