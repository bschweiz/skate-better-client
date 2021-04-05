
import React, { useContext, useState } from "react"


export const ScoreCard = ({ score, props }) => {
        console.log("score from ScoreCard", score)
        let SKATEState = "__.__.__.__.__."
        // debugger
        if (score == 0) {return SKATEState}
        else if (score == 1) {SKATEState = "S_.__.__.__.__."}
        else if (score == 2) {SKATEState = "S_.K_.__.__.__."}
        else if (score == 3) {SKATEState = "S_.K_.A_.__.__."}
        else if (score == 4) {SKATEState = "S_.K_.A_.T_.__."}
        else {SKATEState = "S_.K_.A_.T_.E_."}

        return (
                <>
                        {
                                <h2>{SKATEState}</h2>
                                
                                }
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

