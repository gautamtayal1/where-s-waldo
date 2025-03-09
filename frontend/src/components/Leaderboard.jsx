import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

   const Leaderboard = () => {
    const BASE_URL = 'http://localhost:3000'
    const location = useLocation()
    const {gameName} = location.state
    const [scores, setScores] = useState([])

    const getSessions = async() => {
      const res = await axios.post(BASE_URL + "/game/leaderboard", {
        gameName
      })
      setScores(res.data)
    }

    useEffect(() => {
      getSessions()
    }, [])

    return (
      <div className="flex flex-col items-center pt-20 h-screen bg-gradient-to-br from-secondary to-primary text-white">
        <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Leaderboard ({gameName.charAt(0).toUpperCase  () + gameName.slice(1)})</h1>
          <table className="table-auto border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Time Taken</th>
          </tr>
        </thead>
        <tbody>
        {scores.map((score, index) => {
          if (score.username && score.timeTaken) {
            return (
              <tr key={index} className="hover:bg-gray-700">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{score.username}</td>
                <td className="border border-gray-300 px-4 py-2">{score.timeTaken} seconds</td>
              </tr>
            );
          } else {
            return null; // Ensures undefined is not returned
          }
        })}
      </tbody>
      </table>
          <div className="flex gap-5 mt-6 justify-center">
            <Link to="/home" className="btn btn-primary">New Game</Link>
          </div>
        </div>
      </div>
    );
}

export default Leaderboard