import React, { useState } from "react"

export const OpponentContext = React.createContext()

export const OpponentProvider = (props) => {

    const [opponent, setOpponent] = useState([])
    const [allOpponents, setAllOpponents] = useState([])

    const getAllOpponents = () => {
        return fetch("http://localhost:8000/opponent", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllOpponents)
    }

    const getOpponent = (id) => {
        return fetch(`http://localhost:8000/opponent/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
    }

    const createOpponent = (game) => {
        return fetch("http://localhost:8000/opponent", {
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

    const editOpponent = (opponent) => {
        return fetch(`http://localhost:8000/opponent/${opponent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            },
            body: JSON.stringify(opponent)
        })
            .then(getOpponent)
    }

    return (
        <OpponentContext.Provider value={{
            opponent, allOpponents,
            getOpponent, setOpponent, setAllOpponents,
            createOpponent, editOpponent, getAllOpponents
        }}>
            {props.children}
        </OpponentContext.Provider>
    )
}