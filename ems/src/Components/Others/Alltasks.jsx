import React, { useContext } from 'react'
import Authcontext, { contextforAuth } from '../../Context/Authcontext'



const Alltasks = (elem) => {
    const contextAuth = useContext(contextforAuth)

    return (

        <div className='bg-[#333333] p-8 rounded mt-5' >

            <div className='text-white bg-[#63AFDB] py - 3 px - 5 flex mb - 5 gap - 5 justify - between rounded '>
                <h2 h2 className='w-1/6' > Employee Name</h2 >
                <h3 className='w-1/6 text-center '>New Task</h3>
                <h5 className='w-1/6 text-center '>Active Task</h5>
                <h5 className='w-1/6 text-center '>Completed</h5>
                <h5 className='w-1/6 text-center '>Failed</h5>

            </div >

            {
                contextAuth.employee.map(function (elem) {

                    return <div className='text-white bg-[#63AFDB] py-3 px-5 flex mb-5 gap-5 justify-between rounded '>
                        <h2 className='w-1/6 bg-red rounded px-3'>{elem.name}</h2>
                        <h3 className='w-1/6 text-center bg-red-500 rounded px-3'>Task</h3>
                        <h5 className='w-1/6 text-center bg-yellow-500 rounded px-3'>Status</h5>
                        <h5 className='w-1/6 text-center bg-green-600 rounded px-3'>Status</h5>

                        <h5 className='w-1/6 bg-red-500 rounded px-3'>Failed</h5>

                    </div>
                })
            }
        </div >
    )
}

export default Alltasks