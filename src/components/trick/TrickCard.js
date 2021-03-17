import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TrickContext } from "./EventProvider"
import "./TrickCard.css"



export const EventCard = ({ event, props }) => {

    const { tricks, getTricks } = useContext(TrickContext)
    // debugger
    useEffect(() => {
        getTricks()
    }, [])

    const matchingPlant = plants.find(p => p.id === event.plantId)
    
    const checkboxControl = (evt) => {
        if(evt.target.checked === true){
            updateCompleted(parseInt(evt.target.id), {complete: true})
        } else {
            updateCompleted(parseInt(evt.target.id), {complete: false})
        }
    }
    
    if (matchingPlant == null) { return <div></div> } else {
        return (
            <section className="event_info">
        
                <Link className="card-link"
                    to={{
                        pathname: `/events/${event.id}`,
                        state: { chosenEvent: event, chosenPlant: matchingPlant }
                    }}>
                    <h4 className="event__title">{event.water ? "Water" : "Check-up on"} {matchingPlant.petName} ({event.date})</h4>
                </Link>
                    <label htmlFor={event.id}>{event.complete ? "Completed" : "Check to mark as completed"}</label>
                    <input type="checkbox" key={event.id} id={event.id} name="checkbox" checked=
                    {event.complete ? "checked": ""}
                    onChange={evt=>{
                        checkboxControl(evt)
                    }} />
            </section>
        )
    }
}
