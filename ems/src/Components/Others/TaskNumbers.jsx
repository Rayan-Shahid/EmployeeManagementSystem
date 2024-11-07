import React from 'react'

const TaskNumbers = () => {
    return (
        <div className='flex justify-between mt-10 gap-5 screen'>
            {/* <div className='h-40 w-1/2 bg-red'></div> */}
            <div className='py-5 px-10 rounded-xl bg-gray-400'>
                <h1 className='text-3xl'>0</h1>
                <h2 className='text-2xl'>New Tasks</h2>
            </div>
            <div className='py-5 px-10 rounded-xl bg-green-400'>
                <h1 className='text-3xl'>3</h1>
                <h2 className='text-2xl'>Completed Tasks</h2>
            </div>
            <div className='py-5 px-10 text-black rounded-xl bg-yellow-400'>
                <h1 className='text-3xl'>2</h1>
                <h2 className='text-2xl'>Pending Tasks</h2>
            </div>
            <div className='py-5 px-10 rounded-xl bg-red-400'>
                <h1 className='text-3xl'>1</h1>
                <h2 className='text-2xl'>Failed Task</h2>
            </div>
        </div>
    )
}

export default TaskNumbers