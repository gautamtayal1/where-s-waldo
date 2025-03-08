import React from 'react'

const LoadingPage = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900"
      role="alert"
      aria-label="Loading content"
    >
      <div 
        className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      ></div>
      
      <p className="mt-4 text-white text-lg">Loading...</p>
    </div>
  )
}

export default LoadingPage