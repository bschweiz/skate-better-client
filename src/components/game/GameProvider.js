import React, { useState } from 'react'


export const GameContext = React.createContext()

export const GameProvider = (props) => {

    const [allGames, setAllGames] = useState([])
    const [currentGame, setCurrentGame] = useState([])
    const [chosenGame, setChosenGame] = useState([])
    const [newestGameId, setNewestGameId] = useState([])

    const getAllGames = () => {
        return fetch("http://localhost:8000/game", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllGames)
    }
    
    const getCurrentGame = () => {
        return fetch("http://localhost:8000/game/current", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
        .then(response => response.json())
        .then(setCurrentGame)
    }
    
    const getGameById = (gameId) => {
        return fetch(`http://localhost:8000/game/${gameId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setChosenGame)
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
            .then(data => setNewestGameId(data.id))
            .then(getAllGames)
    }
    
    const rematchGame = () => {
        return fetch("http://localhost:8000/game/rematch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(data => setNewestGameId(data.id))
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

    const updateGame = (gameDetails) => {
        return fetch("http://localhost:8000/game", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(gameDetails)
        })
            .then(getAllGames)
    }

    const deleteGame = (gameId) => {
        return fetch(`http://localhost:8000/game/${gameId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
        .then(getAllGames)
    }

    return (
        <GameContext.Provider value={{
            allGames, currentGame, chosenGame, newestGameId, 
            getAllGames, getCurrentGame, getGameById, 
            createGame, createNewOpponentGame, updateGame,
            deleteGame, rematchGame
        }}>
            {props.children}
        </GameContext.Provider>
    )
}