import React from 'react'

const FindImageComponent = ({dataset}) => {

  return (
    
    <div className='flex justify-center items-center gap-10 p-4'>
      {Object.values(dataset).map((data) => (
        <div>
        <div>
          <img src={data[1]} alt="party" className='h-[80px] w-[50px]'/>
        </div>
        <p>{data[0]}</p>
        </div>
      
    ))}
    </div>
    
   
  )
}

export default FindImageComponent
