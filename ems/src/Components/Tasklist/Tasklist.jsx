import React from 'react'
import Accepted from './Accepted'
import Completed from './Completed'
import Failedtask from './Failedtask'
import Newtask from './Newtask'



const Tasklist = ({ data }) => {
    return (
        <div id='tasklists' className='flex items-center flex-start overflow-x-auto rounded-md gap-8 py-5  flex-nowrap mt-20 h-[65%] w-full'>
            {data.tasks.map((elem, index) => {
                if (elem.failed) {
                    return <Failedtask key={index} data={elem} />
                }
                else if (elem.Completed) {
                    return <Completed key={index} data={elem} />
                }
                else if (elem.newTask) {
                    return <Newtask key={index} data={elem} />
                }
                else if (elem.accepted) {
                    return <Accepted key={index} data={elem} />
                }
            })}

        </div >

    )
}

export default Tasklist