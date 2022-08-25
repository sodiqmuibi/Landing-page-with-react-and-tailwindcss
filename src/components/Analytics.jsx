import React from 'react'
import Laptop from "../assets/chart.webp"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid  md:grid-cols-2'>
            <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, provident aliquid neque autem cumque blanditiis modi ex sed sit accusamus molestiae eveniet culpa. Tempore ipsa temporibus molestiae recusandae consequuntur maiores!
                </p>
                <button className='bg-black w-[200px] rounded-md my-6 px-6 py-3 mx-auto md:mx-0 text-[#00df9a] font-medium'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
