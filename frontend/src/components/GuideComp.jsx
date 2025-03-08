import React from 'react'

import { Link } from 'react-router'


import FindImageComponent from './FindImageComponent'

const GuideComp = ({page}) => { 
  console.log(page)

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl mb-10 mt-5'>{`The ${page}`}</h1>
      <p className='text-xl mb-5'>People to find</p>
      <div className=''>
        {<FindImageComponent page={page}/>}
      </div>
      <div className='flex gap-5'>
      <Link to='/home' className="btn btn-warning mt-5">Change Spot</Link>
      <Link to={`/game/${page}`} className="btn btn-success mt-5">Play Now</Link>
      </div>
    </div>
  )
}

export default GuideComp
