import React, { use, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'  // Fixed import
import FindImageComponent from './FindImageComponent'
import concertImg from '../assets/concert.jpg'
import partyImg from '../assets/party.png'
import gardenImg from '../assets/office.jpg'
import useChar from '../context/charContext'
import axios from 'axios'
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'
import { useNavigate } from 'react-router-dom'

const GamePage = () => {
  const BASE_URL = 'http://localhost:3000'
  const { id } = useParams()
  const { dataset } = useChar()
  const navigate = useNavigate()
  const partyChar = [1, 2, 3]
  const concertChar = [4, 5, 6]
  const gardenChar = [7, 8, 9]

  const [clicked, setClicked] = useState(false)
  const [isFound, setIsFound] = useState([])
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)

  const handleCharClick = (e, charId) => {
    e.preventDefault()
    isMatching(x, y, charId)
    setClicked(false)
  }

  const isMatching = async (x, y, charId) => {
    try {
      const res = await axios.post(BASE_URL + '/game/check', 
      {
        id: charId,
        x : x,
        y : y
      }, {
        withCredentials: true
      });
      const {message} = res.data
      if (message === 'Correct') {
        new Audio(correct).play()
        setIsFound(prev => {
          if (!prev.includes(charId)) {
            return [...prev, charId];
          }
          return prev;
        });
      } else {
        new Audio(wrong).play()
      }
    } catch (error) {
      console.error('Error in isMatching:', error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault()
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left)/ rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top)/ rect.height) * 100);
    setX(x)
    setY(y)
    setClicked(true)
    positionOverlay(x, y)
  }

  const positionOverlay = (x, y) => {
    const overlay = document.querySelector('.overlay')
    if (overlay) {
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
  }

  const imageLink = () => {
    if(id === 'concert'){
      return concertImg
    } else if(id === 'party'){
      return partyImg
    } else if(id === 'garden'){
      return gardenImg
    }
  }

  const checkGameOver = () => {
    const sortedArr = [...isFound].sort()

    const toCheck = sortedArr.toString()
    const partyCheck = partyChar.toString()
    const concertCheck = concertChar.toString()
    const gardenCheck = gardenChar.toString()

    if(toCheck === partyCheck || toCheck === concertCheck || toCheck === gardenCheck){
      console.log('Game Over')
      navigate('/gameover')
    }
  }

  useEffect(() => {
    checkGameOver()
  }, [isFound])

  const handleExit = () => {
    setIsFound([])
  }

  return (
    <div className=''>
      <div className='timer h-[12vh] flex justify-center items-center'>
        <div className='text-4xl text-primary font-bold'>
          01:03
        </div>
      </div>
      <div className="people">
        <FindImageComponent page={id}/>
      </div>
  
      <div className="image flex justify-center items-center relative">
        <img 
          src={imageLink()} 
          alt="" 
          className='h-[120vh] w-[98vw] rounded'
          onClick={handleClick}
        />
        {clicked && 
          <div className='overlay absolute w-auto h-auto border-2 border-black flex gap-5 bg-white p-3 rounded-2xl'>
            {dataset && dataset[id] && 
              Object.values(dataset[id]).map((data, index) => (
                <div className='h-[80px] w-[50px] cursor-pointer' 
                key={index}
                onClick={(e) => handleCharClick(e, data[2])}>
                  <img 
                    src={data[1]} 
                    alt="party" 
                    className='h-[80px] w-[50px] rounded-[10px] cursor-pointer'
                  />
                </div>
              ))
            }
          </div>
        }
      </div>
      <div className='flex justify-center items-center'>
        <Link to="/home" className="exit btn bg-secondary my-5"
        onClick={handleExit}>Exit</Link>
      </div>
    </div>
  )
}

export default GamePage