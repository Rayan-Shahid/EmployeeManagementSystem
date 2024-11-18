import React from 'react'

const Accepted = ({ data }) => {
    console.log(data.email)
    return (
        <div className=' flex-shrink-0 h-full rounded-xl w-[355px] bg-[#2c9ddf]'>
            <div className='flex justify-between m-4 items-center'>
                <h3 className='bg-red-500 py-3 px-2 rounded-md'> {data.category} </h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='px-4 text-2xl font-md py-2'> {data.title}  </h2>
            <p className='text-s px-4 py-5  '> {data.description}  </p>
            <div className='flex justify-between'>
                <button className='bg-green-400 px-3 py-2 m-4'>Completed</button>
                <button className='bg-red-400 px-3 py-2 m-4'>Failed</button>
            </div>
        </div>

    )
}

export default Accepted