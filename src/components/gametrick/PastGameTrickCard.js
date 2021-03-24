
import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import "./GameTrickCard.css"



export const PastGameTrickCard = ({ gametrick, props }) => {

        

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

