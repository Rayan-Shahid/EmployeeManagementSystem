import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import Alltasks from '../Others/Alltasks'

const AdminDash = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} />
            <Createtask />
            <Alltasks />


        </div>
    )
}

export default AdminDash