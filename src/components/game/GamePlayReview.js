import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { PastGameTrickCard } from "../gametrick/PastGameTrickCard"
import { PastGameControls } from "./PastGameControls"


export const GamePlayReview = (props) => {
    const { getAvailableTricksByGame, availableTricks } = useContext(TrickContext)
    const { getGameById, chosenGame, deleteGame } = useContext(GameContext)
    const { getGameTricksByGame, gameTricksByGame, allGameTricks } = useContext(GameTrickContext)
    
    const [theseGameTricks, setTheseGameTricks] = useState([])

    useEffect(() => {
        console.log(props)
        getAvailableTricksByGame(props.match.params.gameId)
        getGameTricksByGame(props.match.params.gameId)
        getGameById(props.match.params.gameId)
    }, [])

    useEffect(() => {
        getAvailableTricksByGame(props.match.params.gameId)
    }, [allGameTricks])
    
    useEffect(() => {
        setTheseGameTricks(gameTricksByGame)
    }, [gameTricksByGame])


    return (
        <>
            <h1>REVIEW YOUR GAME!</h1>
            {/* {<UserScore key={gt.id} gametrick={gt} props={props}></UserScore>}
            {<OpponentScore key={gt.id} gametrick={gt} props={props}></OpponentScore>} */}
            <p>YOU: {chosenGame.user_score}     THEM: {chosenGame.opponent_score}</p>

            <h2>Tricks of the Game:</h2>
            <div className="tricks"> <h3>Completed GameTricks List:</h3>

                {
                    theseGameTricks.map((gt, index) => {
                        return (
                            <>
                                <PastGameTrickCard key={`gametrick-${gt.id}`} gametrick={gt} props={props} />
                                <PastGameControls key={`gametrick-control-${gt.id}`} gametrick={gt} props={props} 
                                                    availableTricks={availableTricks} index={index}/>
                                
                            </>
                        )
                    })
                }
            </div>

            <section>
                <button className="delte-game"
                    onClick={() => {
                        deleteGame(chosenGame.id)
                        props.history.push({ pathname: "/game/review" })
                    }}>Delete This Game</button>
                <button className="nav-link-back"
                    onClick={() => {
                        props.history.push({ pathname: "/game/review" })
                    }}>Back to Past Games</button>
                <button className="nav-link-home"
                    onClick={() => {
                        props.history.push({ pathname: "/" })
                    }}>Home</button>
            </section>
        </>
    )
}


