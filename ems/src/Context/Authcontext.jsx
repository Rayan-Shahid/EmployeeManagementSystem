import React, { createContext, useState } from 'react'
import { getLocalstorage } from '../Utils/Localstorage';

export const contextforAuth = createContext();


const Authcontext = ({ children }) => {


    const [userdata, setuserdata] = useState(null)
    const data = getLocalstorage();
    console.log(data)

    return (
        <contextforAuth.Provider value={"flaxtasks"}>
            {children}
        </contextforAuth.Provider>
    )
}

export default Authcontext