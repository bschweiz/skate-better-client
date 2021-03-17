import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { OpponentContext } from "./OpponentProvider"
import { GameContext} from "../game/GameProvider"

export const OpponentSelect = (props) => {
    const history = useHistory()

    const { allOpponents, addOpponent, getAllOpponents } = useContext(OpponentContext)
    const { createGame } = useContext(GameContext)

    const [newOpponent, setNewOpponent] = useState({
        handle: '',
        goofy: false
    })

    const [gameDetails, setGameDetails] = useState({
        opponentId: 0,
        location: "somewhere flat"
    })

    useEffect(() => {
        getAllOpponents()
    }, [])

    const changeNewOpponentState = (DOMEvent) => {
        const newOpponentState = Object.assign({}, newOpponent)

        newOpponentState[DOMEvent.target.name] = DOMEvent.target.value
        setNewOpponent(newOpponentState)
        console.log("newOpponent State: ", newOpponent)
    }

    const changeGameDetails = (DOMEvent) => {
        const newGameState = Object.assign({}, gameDetails)

        newGameState[DOMEvent.target.name] = DOMEvent.target.value
        console.log(DOMEvent.target)
        setGameDetails(newGameState)
        console.log("gameDetails State: ", gameDetails)
    }


    return (
        <form className="opponentSelect">
            <h2>Who are we playing?</h2>
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
            <h2>New Opponent:</h2>
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
                    <label htmlFor="goofyStatus">Goofy-footed?  </label>
                    <select className="form-control" type="text" name="goofy" autoFocus
                        onChange={changeGameDetails}
                    >
                        <option value='0'>Stance:</option>
                        
                            <option key={0} value={0}>Regular</option>
                            <option key={0} value={0}>Goofy</option>
                        
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Save new Opponet, start SKATING
            </button>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        
                        onChange={changeGameDetails}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createGame(gameDetails)
                    history.push({pathname: "/game/new" })
                }}
                className="btn btn-primary">
                START SKATING!
            </button>
        </form>
    )
}