
import React, { useContext, useState } from "react"
import { TrickContext } from "../trick/TrickProvider"




export const ScoreCard = ({ score, props }) => {
        

        return (
                <>
                        <h2>test, user score: {score}</h2>
                </>
                // <section className="trick_info">

                //         <input type="checkbox" key={"skater-make" + gametrick.id} name="checkbox" checked=
                //                 {gametrick.user_make ? "checked" : ""}
                //         />
                //         <label htmlFor={gametrick.id}>{gametrick.trick.name}</label>
                //         <input type="checkbox" key={"opponent-make" + gametrick.id} name="checkbox" checked=
                //                 {gametrick.opponent_make ? "checked" : ""}
                //         />

                // </section>
        )

}

