import React from 'react'

import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';


const GameOverPage = ({ timeTaken }) => {
  return (
    <div 
    className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <Confetti />
      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
        
        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <p className="text-xl">You found all characters in <span className="font-bold text-accent">{timeTaken}</span> seconds!</p>

        <div className="flex gap-5 mt-6 justify-center">
          <Link to="/leaderboard" className="btn btn-primary">Leaderboard</Link>
          <Link to="/home" className="btn btn-accent">New Game</Link>
        </div>

      </div>
    </div>
  );
};

export default GameOverPage