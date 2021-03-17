import React, { useState } from 'react'


export const GameContext = React.createContext()

export const GameProvider = (props) => {

    const [allGames, setAllGames] = useState([])

    const getAllGames = () => {
        return fetch("http://localhost:8000/game", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllGames)
    }

    return (
        <GameContext.Provider value={{
            allGames, getAllGames
        }}>
            {props.children}
        </GameContext.Provider>
    )
}