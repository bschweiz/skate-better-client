import React, { useContext, useRef, useEffect } from 'react'
import { OpponentContext } from "./OpponentProvider"

export const OpponentSelect = (props) => {

    const { allOpponents, addOpponent, getAllOpponents } = useContext(OpponentContext)

    useEffect(() => {
        getAllOpponents()
    }, [])

  


 

    return (
        <form className="opponentSelect">
            <fieldset>
                <div className="form-group">

                    <select className="form-control" autoFocus 
                    >
                        <option value='0'>Previous Opponents</option>
                        {allOpponents.map((o) => (
                            <option key={o.id} value={o.id}>{o.handle}</option> 
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <input type="text" required autoFocus placeholder="enter name" />
            </fieldset>

            <fieldset>
                <input type="text" required autoFocus placeholder="stance" />
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Save details, start SKATING
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