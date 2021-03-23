import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"
import { GameTrickCard } from "../gametrick/GameTrickCard"

export const GameOver = (props) => {
// debugger
    return (
        <>
            <h1>YOU {props.location.game.won ? "WON!" : "LOST!"} SCORE!</h1>
            {/* {<UserScore key={gt.id} gametrick={gt} props={props}></UserScore>}
            {<OpponentScore key={gt.id} gametrick={gt} props={props}></OpponentScore>} */}
            <p>YOU (): {props.location.game.user_score}     THEM (): {props.location.game.opponent_score}</p>
            <section>
                <button></button>
                <button></button>
                <button></button>
            </section>
        </>

    )
}
