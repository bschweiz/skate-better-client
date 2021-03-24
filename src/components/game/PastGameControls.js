

import React, { useContext, useState, useEffect } from "react"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { GameContext } from "./GameProvider"



export const PastGameControls = ({ gametrick, index, availableTricks }) => {


    const { getGameById, chosenGame, deleteGame } = useContext(GameContext)
    const { getGameTricksByGame, gameTricksByGame, updateGameTrick, allGameTricks } = useContext(GameTrickContext)

    const [editMode, setEditMode] = useState(false)
    
    const [chosenGameTrick, setChosenGameTrick] = useState({
        trickId: 0,
    })

    const changeCurrentTrick = (DOMEvent) => {
        const newTrickState = Object.assign({}, chosenGameTrick)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        console.log(newTrickState)
        setChosenGameTrick(newTrickState)
    }

    return (
        <>
    <button className="edit_trick"
        onClick={() => {
            setEditMode(true)
            console.log('gametrick: ', gametrick)
        }}>change trick selection</button>

    {
        editMode ?
            <fieldset>
                <div className="form-group">

                    <select className="form-control" type="text" name="trickId" autoFocus
                        onChange={evt => {
                            changeCurrentTrick(evt)
                        }}>
                        <option value='0'>Available Tricks</option>
                        {availableTricks.map(tr => (
                            <option key={index+"trick-"+tr.id} value={tr.id}>{tr.name}</option>
                        ))}
                    </select>
                    <button onClick={evt => {

                        const editedGameTrick = {
                            id: gametrick.id,
                            gameId: gametrick.game,
                            trickId: chosenGameTrick.trickId,
                            userMake: gametrick.user_make,
                            opponentMake: gametrick.opponent_make
                        }
                        console.log(editedGameTrick)
                        updateGameTrick(editedGameTrick)
                            .then(setEditMode(false))
                            .then(getGameTricksByGame(gametrick.game))
                    }}
                    >select new trick</button>
                    <button onClick={() => {
                        setEditMode(false)
                    }}>cancel</button>
                </div>
            </fieldset> : <div></div>
    }
    </>
    )

}