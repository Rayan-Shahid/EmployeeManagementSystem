import React from 'react'

const Failedtask = ({ data }) => {
    return (
        <div className=' flex-shrink-0 h-full rounded-xl w-[355px] bg-[#2c9ddf]'>
            <div className='flex justify-between m-4 items-center'>
                <h3 className='bg-red-500 py-3 px-2 rounded-md'> {data.title} </h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='px-4 text-2xl font-md py-2'> {data.title} </h2>
            <p className='text-s px-4 py-5  '> {data.description} </p>
            <div className='mt-6 flex justify-center'>
                <button className='w-[60%] bg-gray-400'>Failed</button>
            </div>
        </div>
    )
}

export default Failedtask