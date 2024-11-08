import React, { createContext, useState, useEffect } from 'react'
import { getLocalstorage, setLocalstorage } from '../Utils/Localstorage';

export const contextforAuth = createContext();


const Authcontext = ({ children }) => {
    // localStorage.clear();

    const [userdata, setuserdata] = useState(null)
    useEffect(() => {
        setLocalstorage();
        const { employee, admin } = getLocalstorage()
        setuserdata({ employee, admin })

    }, [])


    return (
        <contextforAuth.Provider value={userdata}>
            {children}
        </contextforAuth.Provider>
    )
}

export default Authcontext