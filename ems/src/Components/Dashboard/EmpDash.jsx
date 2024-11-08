import React from 'react'
import Header from '../Others/Header'
import TaskNumbers from '../Others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmpDash = ({ data }) => {
    console.log(data)
    return (
        <div className='p-20 bg-[#0F0F0F] h-screen text-white '>
            <Header data={data} />
            <TaskNumbers data={data} />
            <Tasklist data={data} />
        </div>

    )
}

export default EmpDash