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
    
    const createGame = (gameDetails) => {
        return fetch("http://localhost:8000/game", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(gameDetails)
        })
            .then(response => response.json())
            .then(getAllGames)
    }
    
    const createNewOpponentGame = (newOpponentGame) => {
        return fetch("http://localhost:8000/game/addnewopponent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(newOpponentGame)
        })
            .then(response => response.json())
            .then(getAllGames)
    }

    return (
        <GameContext.Provider value={{
            allGames, getAllGames, createGame, createNewOpponentGame
        }}>
            {props.children}
        </GameContext.Provider>
    )
}