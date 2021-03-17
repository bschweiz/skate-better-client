import React, { useState } from 'core-js/library/fn/reflect/es7/metadata'

export const TrickContext = React.createContext()

export const TrickProvider = (props) => {

    const [allTricks, setAllTricks] = useState([])

    const getAllOpponents = () => {
        return fetch("http://localhost:8000/opponent", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sb_token")}`
            }
        })
            .then(response => response.json())
            .then(setAllOpponents)
    }

}