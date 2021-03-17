import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"
import { TrickContext } from "../trick/TrickProvider"
import { TrickCard } from "../trick/TrickCard"


export const GamePlay = (props) => {
    const { getAllTricks, allTricks } = useContext(TrickContext)

    const [ availableTricks, setAvailableTricks ] = useState([])
    
    useEffect(() => {
        console.log(props)
        getAllTricks()
    }, [])
    
    useEffect(() => {
        setAvailableTricks()
    }, [allTricks])
    
    
    
        return (
            <div className="tricks"> <h3>Tricks List</h3>
            
                {
                    allTricks.map(t => {
                        return <TrickCard key={t.id} trick={t} props={props}/>
                    })
                }
            </div>)
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
