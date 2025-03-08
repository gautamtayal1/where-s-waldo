import React from 'react'

import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameOverPage = ({ timeTaken }) => {

  const [name, setName] = useState('')
  const navigate = useNavigate()
  return (
    <div 
    className="flex flex-col items-center pt-20 h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <Confetti />
      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">

        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <p className="text-xl">You found all characters in <span className="font-bold text-accent">{timeTaken}</span> seconds!</p>
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
          onClick={() => {
            if(name.length > 0){
              navigate('/leaderboard')
            } else {
              alert('Please enter your name to check the leaderboard')
            }
          }}>Are you the best?</button>
          <Link to="/home" className="btn btn-accent">New Game</Link>
        </div>

      </div>
    </div>
  );
};

export default GameOverPage