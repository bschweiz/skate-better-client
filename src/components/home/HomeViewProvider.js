import React, { useState } from 'react'

export const HomeViewContext = React.createContext()

export const HomeViewProvider = (props) => {
    
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <HomeViewContext.Provider value={{
            profile, getProfile
        }}>
            {props.children}
        </HomeViewContext.Provider>
    )
}