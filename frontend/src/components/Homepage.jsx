import React from 'react'
import { Link } from 'react-router'

const Homepage = () => {
  return (
    <div className='flex items-center justify-center gap-10 p-8'>

      <Link to='/guide/party' className='card p-5 border-2 border-gray-300 rounded-lg text-center'>
        <div className="img">
          <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/73221f93a815a8ba018e7bc9498bcb6f-1686725409/crowd/create-cartoon-vector-map.png" 
          alt="logo"
          className='w-[20vw] h-[70vh] object-cover' />
          <div className='text-2xl font-bold flex justify-center items-center'>
            <p>The Party</p>
          </div>
        </div>
      </Link>

      <Link to='/guide/concert' className='card p-5 border-2 border-gray-300 rounded-lg text-center'>
        <div className="img">
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/269830404/original/6fb9ada28f6e1a5c22c10b474e18aca80926b989/draw-you-a-where-is-wally-scene.jpg" 
          alt="logo"
          className='w-[20vw] h-[70vh] object-cover' />
          <div className='text-2xl font-bold flex justify-center items-center'>
            <p>The Concert</p>
          </div>
        </div>
      </Link>

      <Link to='/guide/garden' className='card p-5 border-2 border-gray-300 rounded-lg text-center'>
        <div className="img">
          <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/9e0616f40570c1fa9011a1d00e008bab-1688914770/Park%20Waldo/create-cartoon-vector-map.png" 
          alt="logo"
          className='w-[20vw] h-[70vh] object-cover' />
          <div className='text-2xl font-bold flex justify-center items-center'>
            <p>The Garden</p>
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default Homepage