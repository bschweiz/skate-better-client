
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const GameTrickCard = ({ gametrick, props }) => {
        const { getCurrentlyAvailableTricks, availableTricks } = useContext(TrickContext)
        const { getGameTricksByGame, gameTricksByGame } = useContext(GameTrickContext)

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
                                }}>edit</button>
                </section>
        )

}

