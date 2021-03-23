
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const GameTrickCard = ({ gametrick, props }) => {
        const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)

        let editMode = false

        const [chosenGameTrick, setChosenGameTrick] = useState({
                trickId: 0,
        })

        useEffect(() => {
                getAvailableTrickByGame()
        }, [])

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
                                        editMode = true
                                        console.log(gametrick)
                                        return editMode
                                }}>change trick</button>
                        { editMode ?
                                <fieldset>
                                        <div className="form-group">

                                                <select className="form-control" type="text" name="trickId" autoFocus
                                                        onChange={console.log(availableTricks)}
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

