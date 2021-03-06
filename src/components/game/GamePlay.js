import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"
import { ScoreCard } from "../score/ScoreCard"
import { GameTrickCard } from "../gametrick/GameTrickCard"
import './GamePlay.css';


export const GamePlay = (props) => {
    
    const { getCurrentGame, currentGame } = useContext(GameContext)
    const { getCurrentlyAvailableTricks, availableTricks } = useContext(TrickContext)
    const { getGameTricksByNewestGame, newestGameGameTricks } = useContext(GameTrickContext)

    const [currentTrick, setCurrentTrick] = useState({
        trickId: 0,
    })
// debugger
    useEffect(() => {
        getGameTricksByNewestGame()
        getCurrentlyAvailableTricks()
        getCurrentGame()
    }, [])
    
    useEffect(() => {
        
        if (currentGame.user_score >= 5 || currentGame.opponent_score >= 5) {
            console.log('someone won this game!')
            props.history.push({ pathname: "/game/over", game: currentGame })
        } else {console.log('current game: ', currentGame)}
    }, [currentGame])

    const changeCurrentTrick = (DOMEvent) => {
        const newTrickState = Object.assign({}, currentTrick)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        console.log(newTrickState)
        setCurrentTrick(newTrickState)
    }

    return (
        <>

            <h1>SCOREBOARD</h1>
            <div className="score-board-pannel">
            <div className="score-card">
            {
                <ScoreCard key={"user-score" + currentGame.id} score={currentGame.user_score} props={props}></ScoreCard>
                }
            <div className="light-text-label">You</div>
            </div>  
            <div className="score-card">
            {
                <ScoreCard key={"opponent-score" + currentGame.id} score={currentGame.opponent_score} props={props}></ScoreCard>
                }
            <div className="light-text-label">Opponent</div>
            </div> 
            </div>
            <h2></h2>
            { availableTricks ?
                <fieldset>
                    <div className="form-group">
                    <div className="current_trick">                                     
            {  currentTrick.trickId ?
                <>
                
                <TrickCard key={currentTrick.id}
                    trick={availableTricks.find(t => t.id == [currentTrick.trickId])}
                    gameId={currentGame.id}
                    props={props}
                />
                </>
                : <></>
            }
            </div>
                        <select className="form-control-tricks" type="text" name="trickId" autoFocus
                            onChange={changeCurrentTrick}
                        >
                            <option value='0'>Available Tricks</option>
                            {availableTricks.map(tr => (
                                <option key={tr.id} value={tr.id}>{tr.name}</option>
                            ))}
                        </select>
                    </div>
                </fieldset> : <div></div>}

            <h2></h2>
            
            <div className="completed_tricks"> 
                {
                    ((newestGameGameTricks)).map(gt => {
                        return <GameTrickCard key={gt.id} gametrick={gt} props={props} />
                    })
                }
            <h4>Landed Tricks:</h4>
            </div>

            
            <section>
                <button className="home-button"
                onClick={() => {
                    props.history.push({ pathname: "/" })
                }}>Exit Game</button>
            </section>
        </>
    )
}


