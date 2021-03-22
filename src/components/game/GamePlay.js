import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"
import { GameTrickCard } from "../gametrick/GameTrickCard"


export const GamePlay = (props) => {
    const { newestGameId } = useContext(GameContext)
    const { getCurrentlyAvailableTricks, availableTricks } = useContext(TrickContext)
    const { getGameTricksByNewestGame, theseGameTricks } = useContext(GameTrickContext)

    const [currentTrick, setCurrentTrick] = useState({
        trickId: 0,
    })

    useEffect(() => {
        getGameTricksByNewestGame()
        getCurrentlyAvailableTricks()
    }, [])

    const changeCurrentTrick = (DOMEvent) => {
        const newTrickState = Object.assign({}, currentTrick)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        console.log(newTrickState)
        setCurrentTrick(newTrickState)
    }

    return (
        <>
            <h2>Which trick? (Available Tricks)</h2>
            { availableTricks ?
                <fieldset>
                    <div className="form-group">

                        <select className="form-control" type="text" name="trickId" autoFocus
                            onChange={changeCurrentTrick}
                        >
                            <option value='0'>Available Tricks</option>
                            {availableTricks.map(tr => (
                                <option key={tr.id} value={tr.id}>{tr.name}</option>
                            ))}
                        </select>
                    </div>
                </fieldset> : <div></div>}

            <h2>Game in Progress:</h2>
            <div className="tricks"> <h3>Completed GameTricks List:</h3>

                {
                    theseGameTricks.map(gt => {
                        return <GameTrickCard key={gt.id} gametrick={gt} props={props} />
                    })
                }
            </div>

            <h3>Current Trick (in progress, mutable): </h3>
            {  currentTrick.trickId ?
                <TrickCard key={currentTrick.id}
                    trick={availableTricks.find(t => t.id == [currentTrick.trickId])}
                    gameId={newestGameId}
                    props={props}
                />
                : <></>
            }
            <section>
                <button>End Game Now</button>
            </section>
        </>
    )
}


