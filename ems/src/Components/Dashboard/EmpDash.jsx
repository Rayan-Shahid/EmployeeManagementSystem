import React from 'react'
import Header from '../Others/Header'
import TaskNumbers from '../Others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmpDash = (props) => {
    console.log(props.data)
    return (
        <div className='p-20 bg-[#0F0F0F] h-screen text-white '>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskNumbers data={props.data} />
            <Tasklist data={props.data} />
        </div>

    )
}

export default EmpDash