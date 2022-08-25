import React from 'react'
import Single from "../assets/user.png"
import Double from "../assets/user2.png"
import Triple from "../assets/user3.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Single} alt="user" className="w-20 mx-auto mt-[-3rem]"/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium text'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB stoage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 px-6 py-3 mx-auto md:mx-0 text-black font-medium'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col items-center p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
            <img src={Double} alt="user" className="w-20 mx-auto mt-[-3rem]"/>
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font-medium text'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB stoage</p>
                <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-md my-6 px-6 py-3 mx-auto md:mx-0 text-[#00df9a] font-medium'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Triple} alt="user" className="w-20 mx-auto mt-[-3rem]"/>
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold'>$299</p>
            <div className='text-center font-medium text'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB stoage</p>
                <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 px-6 py-3 mx-auto md:mx-0 text-black font-medium'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
