import React from 'react'

const Createtask = () => {
    return (
        <div>

            <div className='p-5 bg-[#333333] mt-5 rounded text-white'>
                <form className='p-20 text-xl flex w-full items-start justify-around'>
                    <div className='w-1/5'>
                        <div>
                            <h3>Task Title</h3>
                            <input className='text-xl2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white-400 mb-4 placeholder-gray-300' type="text" placeholder='Make a UI design' />
                        </div>

                        <div>
                            <h3 >Date</h3>
                            <input className='text-xl2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white-400 mb-4 placeholder-gray-300' type="date" />
                        </div> <div>
                            <h3>Assign To</h3>
                            <input className='text-xl2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white-400 mb-4 placeholder-gray-300 ' type="text" placeholder='employee name' /> </div>
                        <div><h3>Category</h3>
                            <input className='text-xl2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-white-400 mb-4 placeholder-gray-300' type="text" placeholder='Developement / QuickBooks' />
                        </div>
                    </div>
                    <div className=''>
                        <h3>Description</h3>
                        <textarea className='w-full h-44 text-xl2 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-white-400' name='description' />
                        <button className='text-xl bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Createtask