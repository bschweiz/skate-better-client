import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { PastGameTrickCard } from "../gametrick/PastGameTrickCard"
import { PastGameControls } from "./PastGameControls"


export const GamePlayReview = (props) => {
    const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)
    const { getGameById, chosenGame, deleteGame } = useContext(GameContext)
    const { getGameTricksByGame, gameTricksByGame, updateGameTrick, allGameTricks } = useContext(GameTrickContext)

    useEffect(() => {
        // console.log(props)
        getAvailableTricksByGame(props.location.game.id)
        getGameTricksByGame(props.location.game.id)
        getGameById(props.location.game.id)
    }, [])

    // useEffect(() => {
    //     getAvailableTricksByGame(props.location.game.id)
    // }, [allGameTricks])

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
                        return (
                            <>
                                <PastGameTrickCard key={gt.id} gametrick={gt} props={props} />
                                <PastGameControls key={gt.id} gametrick={gt} props={props} />
                                
                            </>
                        )
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


