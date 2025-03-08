import React from 'react'
import { Link } from 'react-router-dom'

   const Leaderboard = ({ scores }) => {
    return (
      <div className="flex flex-col items-center pt-20 h-screen bg-gradient-to-br from-secondary to-primary text-white">
        <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <ul className="list-none w-full text-lg">
            {/* {scores.map((score, index) => (
              <li key={index} className="p-2 border-b border-white">
                #{index + 1} - {score.name} : {score.time}s
              </li>
            ))} */}
          </ul>
          <div className="flex gap-5 mt-6 justify-center">
          
            <Link to="/home" className="btn btn-primary">New Game</Link>
          </div>
        </div>
      </div>
    );
}

export default Leaderboard