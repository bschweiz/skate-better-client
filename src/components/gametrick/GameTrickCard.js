
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const GameTrickCard = ({ gametrick, props }) => {
        const { getAvailableTrickByGame, availableTricks } = useContext(TrickContext)

        const [chosenGameTrick, setChosenGameTrick] = useState({
                trickId: 0,
        })

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
                                        console.log(gametrick)
                                }}>change trick</button>
                        { availableTricks ?
                <fieldset>
                    <div className="form-group">

                        <select className="form-control" type="text" name="trickId" autoFocus
                            onChange={changeCurrentTrick}
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

