import React, { useState } from 'react'


export const GameTrickContext = React.createContext()

export const GameTrickProvider = (props) => {

    const [allGameTricks, setTheseGameTricks] = useState([])

    const getTheseGameTricks = () => {
        return fetch("http://localhost:8000/gametrick", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setTheseGameTricks)
    }
    
    const createGameTrick = (gametrickDetails) => {
        return fetch("http://localhost:8000/gametrick", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(gametrickDetails)
        })
            .then(response => response.json())
            .then(getTheseGameTricks)
    }
    
    return (
        <GameTrickContext.Provider value={{
            allGameTricks, getTheseGameTricks, createGameTrick
        }}>
            {props.children}
        </GameTrickContext.Provider>
    )
}