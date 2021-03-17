import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"


export const GamePlay = (props) => {
    const { getTricks, tricks } = useContext(TrickContext)

    const [ availableTricks, setAvailableTricks ] = useState([])
    
    useEffect(() => {
        getTrickss()
    }, [])
    
    useEffect (()=> {
        const userPlants = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        // debugger
        // console.log("user plants", userPlants)
        
        const subsetEvents = userPlants.map(p => {
            const matchingEventArray = events.filter(e => e.plantId === p.id)
            return matchingEventArray}
        )
        let userFilteredEvents = []
        const combineArrays = (subsetEvents) => {
            return subsetEvents.map(a => a.forEach(e => userFilteredEvents.push(e)))
        }
        combineArrays(subsetEvents)
        setFilteredEvents(userFilteredEvents)
        
    }, [plants, events])

    if (tricks.length) {
        return (
            <div className="ticks"> <h3>Tricks List</h3>
            
                {
                    tricks.map(t => {
                        return <TrickCard key={event.id} event={event} props={props}/>
                    })
                }
            </div>)
            } else {return <div></div>}
}
