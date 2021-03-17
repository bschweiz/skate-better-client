import React, { useState } from 'core-js/library/fn/reflect/es7/metadata'

export const TrickContext = React.createContext()

export const TrickProvider = (props) => {

    const [allTricks, setAllTricks] = useState([])

    const getAllTricks = () => {
        return fetch("http://localhost:8000/tricks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllTricks)
    }

    return (
        <TrickContext.Provider value={{
            allTricks, getAllTricks
        }}>
            {props.children}
        </TrickContext.Provider>
    )
}