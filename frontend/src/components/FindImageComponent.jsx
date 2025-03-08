import React from 'react'
import useChar from '../context/charContext'

const FindImageComponent = ({page}) => {

  const {dataset} = useChar()

  return (
    <div className='relative flex justify-center items-center gap-10 p-4'>
      {Object.values(dataset[page]).map((data, index) => (
        <div key={index}>
        <div className='h-[80px] w-[50px] cursor-pointer'>
          <img 
          src={data[1]} 
          alt="party" 
          className='h-[80px] w-[50px] rounded-[10px] cursor-pointer'
          
          />
        </div>
        <p>{data[0]}</p>
        </div>
      
    ))}
    </div>
  )
}

export default FindImageComponent
