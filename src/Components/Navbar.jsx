import React from "react"
const Navbar = ({data,setData,setSearchQuery}) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-4 text-white max-w-[1400px] mx-auto px-4 h-24 sm:flex sm:flex-row sm:justify-between bg-black fixed z-10 w-[98%] top-[-1px]'>
        <h1 className='w-full text-3xl text-[#00df9a] font-bold'>Trendy Newss.</h1>
        <div className='w-[100%] sm:w-[80%] mt-[5px]'>
           <form className='flex justify-between items-center gap-3'onSubmit={(e)=>{
            e.preventDefault();
            setSearchQuery(data)
           }}>
           <input className='py-1 px-1 outline-none w-full border border-green-400 shadow-green-400 rounded-sm bg-white text-black font-medium sm:w-full md:w-full' type="text" placeholder="Search news" value={data} onChange={(e)=>{setData(e.target.value)}}></input>
           <button className='px-6 py-1 font-medium bg-green-400 text-black rounded-sm hover:cursor-pointer' type="submit">Search</button>
           </form>
        </div>
    </div>
    </>
  )
}

export default Navbar