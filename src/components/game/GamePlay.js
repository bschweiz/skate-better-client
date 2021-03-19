import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { GameTrickContext } from "../gametrick/GameTrickProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"
import { GameTrickCard } from "../gametrick/GameTrickCard"


export const GamePlay = (props) => {
    const { newestGameId } = useContext(GameContext)
    const { getAllTricks, allTricks } = useContext(TrickContext)
    const { getGameTricksByGame, theseGameTricks } = useContext(GameTrickContext)

    const [ availableTricks, setAvailableTricks ] = useState([])
    
    const [ currentTrick, setCurrentTrick ] = useState({
        trickId: 0,
    })
    
    useEffect(() => {
        getAllTricks()
    }, [])
    
    useEffect(() => {
        console.log("newest game id: ", newestGameId)
        getGameTricksByGame(newestGameId)
    }, [newestGameId])
    
    useEffect(() => {
        setAvailableTricks(allTricks)
        console.log(availableTricks)
    }, [allTricks])
    
    const changeCurrentTrick = (DOMEvent) => {
        const newTrickState = Object.assign({}, currentTrick)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        setCurrentTrick(newTrickState)
    }
    
    
        return (
            <>
            <h2>Which trick? (Available Tricks)</h2>
            { availableTricks ? <fieldset>
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
            <div className="tricks"> <h3>Tricks List</h3>
            
                {
                    theseGameTricks.map(gt => {
                        return <GameTrickCard key={gt.id} gametrick={gt} props={props}/>
                    })
                }
            </div>

            <h3>Current Trick: </h3>
            {  currentTrick.trickId ? <TrickCard key={currentTrick.id} trick={allTricks.find( t => t.id == [currentTrick.trickId])} props={props}/> : <></> }
            </>
            )
    }
        
        
        // useEffect (()=> {
        //     const userPlants = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        //     // debugger
        //     // console.log("user plants", userPlants)
            
        //     const subsetEvents = userPlants.map(p => {
        //         const matchingEventArray = events.filter(e => e.plantId === p.id)
        //         return matchingEventArray}
        //     )
        //     let userFilteredEvents = []
        //     const combineArrays = (subsetEvents) => {
        //         return subsetEvents.map(a => a.forEach(e => userFilteredEvents.push(e)))
        //     }
        //     combineArrays(subsetEvents)
        //     setFilteredEvents(userFilteredEvents)
            
        // }, [plants, events])
