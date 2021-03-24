import React, { useState } from 'react'


export const TrickContext = React.createContext()

export const TrickProvider = (props) => {

    const [allTricks, setAllTricks] = useState([])
    const [availableTricks, setAvailableTricks] = useState([])

    const getAllTricks = () => {
        return fetch("http://localhost:8000/tricks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllTricks)
    }
    
    const getCurrentlyAvailableTricks = () => {
        return fetch("http://localhost:8000/tricks/available", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAvailableTricks)
    }
    
    const getAvailableTricksByGame = (gameId) => {
        return fetch(`http://localhost:8000/tricks?gameId=${gameId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAvailableTricks)
    }

    return (
        <TrickContext.Provider value={{
            allTricks, availableTricks, getAllTricks, getCurrentlyAvailableTricks,
            getAvailableTricksByGame
        }}>
            {props.children}
        </TrickContext.Provider>
    )
}