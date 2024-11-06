import React from 'react'
import Header from '../../Others/Header'

const AdminDash = () => {
    return (
        <div className='h-screen w-full p-10'> AdminDash
            <Header />
            <div>
                <form className='p-20 text-xl flex w-full items-start justify-around'>
                    <div>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" className='text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 mb-2' placeholder='Enter Task Title here' />
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input type="date" />
                        </div> <div>
                            <h3>Assign To</h3>
                            <input type="text" className='text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 mb-2' placeholder='Employee Name' /> </div>
                        <div><h3>Category</h3>
                            <input className='text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 mb-2' type="text" placeholder='Developement / QuickBooks' />
                        </div>
                    </div>
                    <div>  <h3>Description</h3>
                        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400' name="description" placeholder='Task Description' id="" cols="60" rows=""></textarea> </div>
                </form>
                <button>Create</button>
            </div>

        </div>
    )
}

export default AdminDash