import React from 'react';

const TaskNumbers = ({ data }) => {
    if (!data || !data.taskscount) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-between mt-10 gap-5 screen'>
            <div className='py-5 px-10 rounded-xl bg-gray-400'>
                <h1 className='text-3xl'>{data.taskscount.newTask || 0}</h1>
                <h2 className='text-2xl'>New Tasks</h2>
            </div>
            <div className='py-5 px-10 rounded-xl bg-green-400'>
                <h1 className='text-3xl'>{data.taskscount.completed || 0}</h1>
                <h2 className='text-2xl'>Completed Tasks</h2>
            </div>
            <div className='py-5 px-10 text-black rounded-xl bg-yellow-400'>
                <h1 className='text-3xl'>{data.taskscount.pending || 0}</h1>
                <h2 className='text-2xl'>Pending Tasks</h2>
            </div>
            <div className='py-5 px-10 rounded-xl bg-red-400'>
                <h1 className='text-3xl'>{data.taskscount.failed || 0}</h1>
                <h2 className='text-2xl'>Failed Task</h2>
            </div>
        </div>
    );
};

export default TaskNumbers;
