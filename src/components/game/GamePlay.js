import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"


export const GamePlay = (props) => {
    const { getAllTricks, allTricks } = useContext(TrickContext)

    const [ availableTricks, setAvailableTricks ] = useState([])
    
    const [currentTrick, setCurrentTrick] = useState({
        trickId: 0,
    })
    
    useEffect(() => {
        console.log(props)
        getAllTricks()
    }, [])
    
    useEffect(() => {
        setAvailableTricks()
    }, [allTricks])
    
    const changeCurrentTrick = (DOMEvent) => {
        const newTrickState = Object.assign({}, currentTrick)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        setCurrentTrick(newTrickState)
    }
    
    
        return (
            <>
            <h2>Which trick? (Available Tricks)</h2>
            <fieldset>
                <div className="form-group">

                    <select className="form-control" type="text" name="trickSelect" autoFocus
                        onChange={changeCurrentTrick}
                    >
                        <option value='0'>Available Tricks</option>
                        {availableTricks.map(tr => (
                            <option key={tr.id} value={tr.id}>{tr.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <h2>Full Trick List:</h2>
            <div className="tricks"> <h3>Tricks List</h3>
            
                {
                    allTricks.map(t => {
                        return <TrickCard key={t.id} trick={t} props={props}/>
                    })
                }
            </div>
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
