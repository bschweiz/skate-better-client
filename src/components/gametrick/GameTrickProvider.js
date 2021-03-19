import React, { useState } from 'react'


export const GameTrickContext = React.createContext()

export const GameTrickProvider = (props) => {

    const [allGameTricks, setAllGameTricks] = useState([])
    const [theseGameTricks, setTheseGameTricks] = useState([])

    const getAllGameTricks = () => {
        return fetch("http://localhost:8000/gametricks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllGameTricks)
    }
    
    const getGameTricksByGame = (gameId) => {
        return fetch(`http://localhost:8000/gametricks?game=${gameId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setTheseGameTricks)
    }
    
    const createGameTrick = (gametrickDetails) => {
        return fetch("http://localhost:8000/gametricks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(gametrickDetails)
        })
            .then(response => response.json())
            .then(getAllGameTricks)
    }
    
    return (
        <GameTrickContext.Provider value={{
            allGameTricks, getAllGameTricks, createGameTrick, theseGameTricks
        }}>
            {props.children}
        </GameTrickContext.Provider>
    )
}