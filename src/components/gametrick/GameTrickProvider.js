import React, { useState, useContext } from 'react'
import { TrickContext } from "../trick/TrickProvider"
import { GameContext } from "../game/GameProvider"

export const GameTrickContext = React.createContext()

export const GameTrickProvider = (props) => {

    const { getCurrentlyAvailableTricks } = useContext(TrickContext)
    const { getCurrentGame } = useContext(GameContext)

    const [allGameTricks, setAllGameTricks] = useState([])
    const [theseGameTricks, setTheseGameTricks] = useState([])
    const [gameTricksByGame, setGameTricksByGame] = useState([])

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
            .then(setGameTricksByGame)
    }

    const getGameTricksByNewestGame = () => {
        // this function uses ORM to pull the most recent game
        return fetch(`http://localhost:8000/gametricks/currentgame`, {
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
            .then(getGameTricksByNewestGame)
            .then(getCurrentGame)
            .then(getCurrentlyAvailableTricks)
    }

    return (
        <GameTrickContext.Provider value={{
            allGameTricks, theseGameTricks, gameTricksByGame,
            getAllGameTricks, getGameTricksByNewestGame, getGameTricksByGame,
            createGameTrick
        }}>
            {props.children}
        </GameTrickContext.Provider>
    )
}