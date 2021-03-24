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

    const [editMode, setEditMode] = useState(false)
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
                                <button className="edit_trick"
                                    onClick={() => {
                                        setEditMode(true)
                                        console.log('gametrick: ', gametrick)
                                    }}>change trick selection</button>
                                {editMode ?
                                    <fieldset>
                                        <div className="form-group">

                                            <select className="form-control" type="text" name="trickId" autoFocus
                                                onChange={evt => {
                                                    changeCurrentTrick(evt)
                                                }}>
                                                <option value='0'>Available Tricks</option>
                                                {availableTricks.map(tr => (
                                                    <option key={tr.id} value={tr.id}>{tr.name}</option>
                                                ))}
                                            </select>
                                            <button onClick={evt => {

                                                const editedGameTrick = {
                                                    id: gametrick.id,
                                                    gameId: gametrick.game,
                                                    trickId: chosenGameTrick.trickId,
                                                    userMake: gametrick.user_make,
                                                    opponentMake: gametrick.opponent_make
                                                }
                                                console.log(editedGameTrick)
                                                updateGameTrick(editedGameTrick)
                                                    .then(setEditMode(false))
                                                    .then(getGameTricksByGame(gametrick.game))
                                            }}
                                            >select new trick</button>
                                            <button onClick={() => {
                                                setEditMode(false)
                                            }}>cancel</button>
                                        </div>
                                    </fieldset> : <div></div>
                                }
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


