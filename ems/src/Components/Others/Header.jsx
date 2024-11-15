import React from 'react'

const Header = ({ data }) => {


    const logOut = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    }

    // console.log(data)
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello, <span className='text-3xl font-semibold'> alii &#x1F44B;</span> </h1>
            <button onClick={logOut} className='bg-[#63AFDB] px-5 py-2 rounded-smalling text-lg font-medium' >Log out</button>

        </div>

    )
}

export default Header