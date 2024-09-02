import React from 'react'

const Hero = ({search=[]}) => {
  return (
    <div className='h-screen mx-auto text-white bg-black'>
      <div className="w-full py-40 px-9 h-screen flex justify-around flex-wrap overflow-y-scroll">
        {search.map((currItem,index)=>{
          return(
            <div key={index} className='w-[330px] bg-white rounded-sm py-1 px-1 mb-4 hover:z-[2] hover:scale-105 duration-300'>
              <img className='w-full mb-2 rounded-sm' src={currItem.urlToImage} alt='/'/>
              <p className='text-black font-bold text-lg hover:underline hover:cursor-pointer' onClick={() => window.location.href = currItem.url}>{currItem.title}</p>
              <p className='text-black font-medium text-sm'>{currItem.description}</p>
              <button className='py-2 px-1 font-medium text-black bg-purple-400 rounded-sm hover:cursor-pointer mt-2 mb-2 ml-1' onClick={() => window.location.href = currItem.url}>Read More</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero