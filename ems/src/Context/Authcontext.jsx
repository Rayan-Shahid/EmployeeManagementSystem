import React, { createContext, useState, useEffect } from 'react'
import { getLocalstorage } from '../Utils/Localstorage';

export const contextforAuth = createContext();


const Authcontext = ({ children }) => {

    const [userdata, setuserdata] = useState(null)
    useEffect(() => {

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