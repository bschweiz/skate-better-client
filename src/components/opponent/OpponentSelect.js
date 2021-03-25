import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { OpponentContext } from "./OpponentProvider"
import { GameContext } from "../game/GameProvider"
import './OpponentSelect.css'

export const OpponentSelect = (props) => {
    const history = useHistory()

    const { allOpponents, getAllOpponents } = useContext(OpponentContext)
    const { createGame, createNewOpponentGame } = useContext(GameContext)

    const [thisLocation, setThisLocation] = useState({
        location: ""
    })

    const [handleList, setHandleList] = useState([])

    const [newOpponent, setNewOpponent] = useState({
        handle: 'annonymous',
        goofy: 0,
    })

    const [gameDetails, setGameDetails] = useState({
        opponentId: 0,
    })

    useEffect(() => {
        getAllOpponents()
    }, [])

    useEffect(() => {
        const opponentNames = allOpponents.map((o) => o.handle)
        setHandleList(opponentNames)
    }, [allOpponents])

    useEffect(() => {
        console.log("newOpponent State: ", newOpponent, "gameDetails State: ", gameDetails, "thisLocation: ", thisLocation)
    }, [gameDetails, newOpponent, thisLocation])

    const changeNewOpponentState = (DOMEvent) => {
        const newOpponentState = Object.assign({}, newOpponent)

        newOpponentState[DOMEvent.target.name] = DOMEvent.target.value
        setNewOpponent(newOpponentState)
    }

    const changeGameDetails = (DOMEvent) => {
        const newGameState = Object.assign({}, gameDetails)

        newGameState[DOMEvent.target.name] = DOMEvent.target.value
        setGameDetails(newGameState)
    }

    const changeLocation = (DOMEvent) => {
        const newLocationState = Object.assign({}, thisLocation)

        newLocationState[DOMEvent.target.name] = DOMEvent.target.value
        setThisLocation(newLocationState)
    }


    return (
        <>
        
            <h2>Who are we playing?</h2>
            <div className="opponent-select-fields">
            <form>

            
            <fieldset>
                <div className="form-group">

                    <select className="form-control" type="text" name="opponentId" autoFocus
                        onChange={changeGameDetails}
                    >
                        <option value='0'>Previous Opponents</option>
                        {allOpponents.map(o => (
                            <option key={o.id} value={o.id}>{o.handle}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <h3>New Opponent:</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Name: </label>
                    <input type="text" name="handle" required autoFocus className="form-control"

                        onChange={changeNewOpponentState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="goofyStatus">Stance: </label>
                    <select className="form-control" type="text" name="goofy" autoFocus required
                        onChange={changeNewOpponentState}>

                        <option value={0}>Regular</option>
                        <option value={1}>Goofy</option>

                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        onChange={changeLocation}
                    />
                </div>
            </fieldset>
            </form>
            <div className="button-stack">
            <button type="submit"
                onClick={evt => {
                    // debugger
                    evt.preventDefault()

                    if (gameDetails.opponentId !== 0) {
                        const fullGameDetails = Object.assign({}, gameDetails)
                        fullGameDetails['location'] = thisLocation.location
                        createGame(fullGameDetails)
                        .then(() => history.push({ pathname: "/game/new" }))
                    }
                    
                    else  
                        if 
                        (handleList.includes(newOpponent.handle))
                            { alert("This opponent handle already exist, please choose a unique name.")
                            return; }

                    else {
                    const newOpponentGame = Object.assign({}, newOpponent)
                    newOpponentGame['location'] = thisLocation.location
                    createNewOpponentGame(newOpponentGame)
                    .then(() => history.push({ pathname: "/game/new" }))}

                    }
                }
                
                className="start-skating">
                START SKATING!
            </button>

            <button className="home-button" 
                onClick={() => {
                    history.push({ pathname: "/" })
                }}>Home
            </button>
            </div>
            </div>
        </>
    )
}