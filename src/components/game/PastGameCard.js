import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./PastGameCard.css"



export const PastGameCard = ({game}) => {

            return <p>
                <div className="game__title">Vs opponent id: {game.opponent} at {game.location}</div>
                <div className="game__players"> on {game.date_time} players needed</div>
                <div className="game__description">Who won? {game.won ? "YOU!" : "Not you, unfortunately."}</div>

            </p>
    
    
}



       
    
    


// return (

//     <section className="game__info">
//         <Link className="card-link"
//             to={{
//                 pathname: `/reviewgame/${game.id}`,
//                 state: { chosenGame: game }
//             }}>
//         <h2 className="card-title">Choose This Game</h2>
//         </Link>
//         <h3 className="common__name">{game.date_time}</h3>
//         <div className="scientific__name">Won ?{game.won}</div>
//         <div className="scientific__name">Where ?{game.location}</div>
        
        
//     </section>
// )