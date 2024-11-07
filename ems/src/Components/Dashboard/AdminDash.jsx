import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import Alltasks from '../Others/Alltasks'

const AdminDash = () => {
    return (
        <div className='h-screen w-full p-10'> AdminDash
            <Header />
            <Createtask />
            <Alltasks />


        </div>
    )
}

export default AdminDash