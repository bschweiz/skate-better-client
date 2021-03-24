import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"
import { PastGameTrickCard } from "../gametrick/PastGameTrickCard"


export const GamePlayReview = (props) => {

    const { getGameById, chosenGame, deleteGame } = useContext(GameContext)
    const { getGameTricksByGame, gameTricksByGame } = useContext(GameTrickContext)

    useEffect(() => {
        console.log(props)
        getGameTricksByGame(props.location.game.id)
        getGameById(props.location.game.id)
    }, [])

    return (
        <>
            <h1>REVIEW YOUR GAME!</h1>
            {/* {<UserScore key={gt.id} gametrick={gt} props={props}></UserScore>}
            {<OpponentScore key={gt.id} gametrick={gt} props={props}></OpponentScore>} */}
            <p>YOU (): {chosenGame.user_score}     THEM (): {chosenGame.opponent_score}</p>

            <h2>Tricks of the Game:</h2>
            <div className="tricks"> <h3>Completed GameTricks List:</h3>

                {
                    gameTricksByGame.map(gt => {
                        return <PastGameTrickCard key={gt.id} gametrick={gt} props={props} />
                    })
                }
            </div>

            <section>
                <button className="nav-link"
                    onClick={() => {
                        deleteGame(chosenGame.id)
                        props.history.push({ pathname: "/" })
                    }}>Delete This Game</button>
                <button className="nav-link"
                    onClick={() => {
                        props.history.push({ pathname: "/" })
                    }}>Home</button>
            </section>
        </>
    )
}


