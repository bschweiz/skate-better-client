
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const PastGameTrickCard = ({ gametrick, props }) => {
        const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)



        
        const [editMode, setEditMode] = useState(false)
        
        const [chosenGameTrick, setChosenGameTrick] = useState({
                trickId: 0,
        })

        useEffect(() => {
                getAvailableTricksByGame()
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
                                                                console.log(evt)
                                                                changeCurrentTrick(evt)}
                                                                }
                                                >
                                                        <option value='0'>Available Tricks</option>
                                                        {availableTricks.map(tr => (
                                                                <option key={tr.id} value={tr.id}>{tr.name}</option>
                                                        ))}
                                                </select>
                                        </div>
                                </fieldset> : <div></div>}
                </section>
        )

}

