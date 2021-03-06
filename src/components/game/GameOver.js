import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"

export const GameOver = (props) => {
    const { rematchGame } = useContext(GameContext)
    // debugger
    return (
        <>
            <h1>YOU {props.location.game.won ? "WON! Congrats!" : "LOST! Oh well, better luck next time"} </h1>
            {/* {<UserScore key={gt.id} gametrick={gt} props={props}></UserScore>}
            {<OpponentScore key={gt.id} gametrick={gt} props={props}></OpponentScore>} */}
            <p>YOU (): {props.location.game.user_score}     THEM (): {props.location.game.opponent_score}</p>
            <section>
                <button className="nav-link"
                    onClick={() => {
                        rematchGame()
                        .then(() => 
                        props.history.push({ pathname: "/game/new" })
                        )
                        }
                    }>Rematch</button>

                <button className="nav-link"
                    onClick={() => {
                        props.history.push({pathname: `/game/review/${props.location.game.id}`, 
                                            game: props.location.game})
                    }}>Review This Game</button>

                <button className="nav-link"
                    onClick={() => {
                        props.history.push({ pathname: "/" })
                    }}>Home</button>
            </section>
        </>

    )
}
