
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const PastGameTrickCard = ({ gametrick, props }) => {
        const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)
        const { updateGameTrick } = useContext(GameTrickContext)




        const [editMode, setEditMode] = useState(false)

        const [chosenGameTrick, setChosenGameTrick] = useState({
                trickId: 0,
        })

        useEffect(() => {
                getAvailableTricksByGame(gametrick.game)
        }, [])

        const changeCurrentTrick = (DOMEvent) => {
                const newTrickState = Object.assign({}, chosenGameTrick)

                newTrickState[DOMEvent.target.name] = DOMEvent.target.value
                console.log(newTrickState)
                setChosenGameTrick(newTrickState)
        }

        return (
                <section className="trick_info">

                        <input type="checkbox" key={"skater-make" + gametrick.id} name="checkbox" checked=
                                {gametrick.user_make ? "checked" : ""}
                        />
                        <label htmlFor={gametrick.id}>{gametrick.trick.name}</label>
                        <input type="checkbox" key={"opponent-make" + gametrick.id} name="checkbox" checked=
                                {gametrick.opponent_make ? "checked" : ""}
                        />
                        <button className="edit_trick"
                                onClick={() => {
                                        setEditMode(true)
                                        console.log(gametrick)
                                }}>change trick selection</button>
                        { editMode ?
                                <fieldset>
                                        <div className="form-group">

                                                <select className="form-control" type="text" name="trickId" autoFocus
                                                        onChange={evt => {
                                                                changeCurrentTrick(evt)
                                                        }}>
                                                        <option value='0'>Available Tricks</option>
                                                        {availableTricks.map(tr => (
                                                                <option key={tr.id} value={tr.id}>{tr.name}</option>
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

                                                }}
                                                >select new trick</button>
                                                <button onClick={() => {
                                                        setEditMode(false)
                                                }}>cancel</button>
                                        </div>
                                </fieldset> : <div></div>
                        }
                </section >
        )

}

