import React, { useState } from "react"

export const OpponentContext = React.createContext()

export const OpponentProvider = (props) => {
    const [oppoonent, setOpponent] = useState([])
    const [game, setOpponent] = useState([])
    const [gameTypes, setTypes] = useState([])

    const getOpponent = () => {
        return fetch("http://localhost:8000/oppoonent", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setOpponent)
    }

    const getOpponent = (id) => {
        return fetch(`http://localhost:8000/oppoonent/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }

    const getOpponentTypes = () => {
        return fetch("http://localhost:8000/gametypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setTypes)
    }

    const createOpponent = (game) => {
        return fetch("http://localhost:8000/oppoonent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(getOpponent)
    }

    const editOpponent = (game) => {
        return fetch(`http://localhost:8000/oppoonent/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(getOpponent)
    }

    return (
        <OpponentContext.Provider value={{
            game, oppoonent, gameTypes,
            getOpponent, getOpponent, getOpponentTypes,
            createOpponent, editOpponent, getOpponent
        }}>
            {props.children}
        </OpponentContext.Provider>
    )
}