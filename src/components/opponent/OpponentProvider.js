import React, { useState } from "react"

export const OpponentContext = React.createContext()

export const OpponentProvider = (props) => {

    const [oppoonent, setOpponent] = useState([])
    const [allOppoonents, setAllOpponents] = useState([])

    const getAllOpponents = () => {
        return fetch("http://localhost:8000/oppoonent", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllOpponents)
    }

    const getOpponent = (id) => {
        return fetch(`http://localhost:8000/oppoonent/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
    }

    const getOpponentTypes = () => {
        return fetch("http://localhost:8000/gametypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
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
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
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
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(getOpponent)
    }

    return (
        <OpponentContext.Provider value={{
            game, oppoonent, allOppoonents,
            getOpponent, setOpponent, setAllOpponents,
            createOpponent, editOpponent, getAllOpponents
        }}>
            {props.children}
        </OpponentContext.Provider>
    )
}