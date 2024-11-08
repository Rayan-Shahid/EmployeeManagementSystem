import React from 'react'

const Accepted = ({ data }) => {
    console.log(data.password)
    return (
        <div className=' flex-shrink-0 h-full rounded-xl w-[355px] bg-[#2c9ddf]'>
            <div className='flex justify-between m-4 items-center'>
                <h3 className='bg-red-500 py-3 px-2 rounded-md'> Urgent </h3>
                <h4>20 JUNE 2024</h4>
            </div>
            <h2 className='px-4 text-2xl font-md py-2'>  Create Fuel sheets for 2023 </h2>
            <p className='text-s px-4 py-5  '> ACCEPTED Create fuels sheets for all the remaining months of 2023. Make them according to the provided discription and create the sheets for all the stores </p>
            <div className='flex justify-between'>
                <button className='bg-green-400 px-3 py-2 m-4'>Completed</button>
                <button className='bg-red-400 px-3 py-2 m-4'>Failed</button>
            </div>
        </div>

    )
}

export default Accepted