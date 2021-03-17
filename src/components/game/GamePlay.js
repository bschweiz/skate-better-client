import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from "./GameProvider"


export const GamePlay = (props) => {
    const { getTricks, tricks } = useContext(TrickContext)
    const { getPlantData, plants } = useContext(PlantContext)
    const [ filteredEvents, setFilteredEvents ] = useState([])
    
    useEffect(() => {
        getEvents().then(getPlantData)
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

    if (events.length && plants.length) {
        return (
            <div className="events"> <h3>Upcoming Care Events</h3>
            {/* <button
                onClick={evt => {
                    // console.log(evt)
                    // showCompleted({ plant })
                }}
            >View Completed Cares </button> */}
                {
                    sortedAttempt(filteredEvents).map(event => {
                        return <EventCard key={event.id} event={event} props={props}/>
                    })
                }
            </div>)
            } else {return <div></div>}
}
