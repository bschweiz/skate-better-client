
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const PastGameTrickCard = ({ gametrick, props }) => {
        const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)
        const { updateGameTrick, getGameTricksByGame, allGameTricks } = useContext(GameTrickContext)




        const [editMode, setEditMode] = useState(false)

        const [chosenGameTrick, setChosenGameTrick] = useState({
                trickId: 0,
        })

        useEffect(() => {
                getAvailableTricksByGame(gametrick.game)
        }, [allGameTricks])

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
                        
                </section>
        )

}

