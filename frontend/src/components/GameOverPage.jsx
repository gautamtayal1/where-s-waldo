import React from 'react'

import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const GameOverPage = () => {

  const location = useLocation()
  const {sessionId, gameName} = location.state
  console.log(sessionId);
  
  const [name, setName] = useState('')
  const BASE_URL = 'http://localhost:3000'
  const navigate = useNavigate()

  const handleSubmit = () => {
    createUser()
    if(name.length > 0){
      navigate('/leaderboard', {state: { gameName }})
    } else {
      alert('Please enter your name to check the leaderboard')
    }
  }

  const createUser = async() => {
    try {
      const res = await axios.post(`${BASE_URL}/game/user/create`, 
        {name, sessionId},
      {withCredentials: true})
      console.log(res.data)
    } catch (error) {
      console.error('Error in createUser:', error);
    }
  }
  
  return (
    <div 
    className="flex flex-col items-center pt-20 h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <Confetti />
      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">

        <h1 className="text-4xl font-bold">Congratulations!</h1>
        <input 
        type="text" 
        placeholder="Enter your name" 
        className="input input-bordered w-full max-w-xs mt-5 "
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <div className="flex gap-5 mt-6 justify-center">
          <button
          className="btn btn-primary"
          onClick={handleSubmit}>Are you the best?</button>
          <Link to="/home" className="btn btn-accent">New Game</Link>
        </div>

      </div>
    </div>
  );
};

export default GameOverPage