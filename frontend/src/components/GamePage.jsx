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
      <div className='timer h-[10vh]'>timer</div>
      <div className="people">
        <FindImageComponent page = {id}/>
      </div>

      <div className="image flex justify-center items-center">
        <img src={imageLink()} alt="" 
        className='h-[120vh] w-[98vw] rounded'/>
      </div>
    <div className='flex justify-center items-center'>
     <Link to="/home" className="exit btn bg-secondary my-5">Exit</Link>
    </div>
      
    </div>
  )

}

export default GamePage