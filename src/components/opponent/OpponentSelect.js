import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { OpponentContext } from "./OpponentProvider"

export const OpponentSelect = (props) => {
    const history = useHistory()

    const { allOpponents, addOpponent, getAllOpponents } = useContext(OpponentContext)

    const [currentOpponent, setCurrentOpponent] = useState({
        handle: '',
        goofy: false
    })

    useEffect(() => {
        getAllOpponents()
    }, [])

    const changeOpponentState = (DOMEvent) => {
        const newOpponentState = Object.assign({}, currentOpponent)

        newOpponentState[DOMEvent.target.name] = DOMEvent.target.value
        setCurrentOpponent(newOpponentState)
        console.log(currentOpponent)
    }



    return (
        <form className="opponentSelect">
            <fieldset>
                <div className="form-group">

                    <select className="form-control" type="text" name="handle" autoFocus
                        onChange={changeOpponentState}
                    >
                        <option value='0'>Choose a Previous Opponent</option>
                        {allOpponents.map((o) => (
                            <option key={o.id} value={o.id}>{o.handle}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    history.push({pathname: "/game/new" })
                }}
                className="btn btn-primary">
                START SKATING!
            </button>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Name or Nickname: </label>
                    <input type="text" name="handle" required autoFocus className="form-control"
                        value={currentOpponent.handle}
                        onChange={changeOpponentState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="goofyStatus">Goofy-footed?  </label>
                    <input type="checkbox" id="goofySelect" required autoFocus placeholder="stance" />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Save new Opponet, start SKATING
            </button>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Enter details later, just start SKATING
        </button>
        </form>
    )
}