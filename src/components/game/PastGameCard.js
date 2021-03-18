import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./PastGameCard.css"



export const TrefleCard = ({ profile }) => {

    
    
    return (

        <section className="game__info">
            <Link className="card-link"
                to={{
                    pathname: `/reviewgame/${game.id}`,
                    state: { chosenGame: game }
                }}>
            <h2 className="card-title">Choose This Game</h2>
            </Link>
            <h3 className="common__name">{game.date_time}</h3>
            <div className="scientific__name">Won ?{game.won}</div>
            <div className="scientific__name">Where ?{game.location}</div>
            
            
        </section>
    )
}