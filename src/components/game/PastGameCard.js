import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router'
import "./PastGameCard.css"



export const PastGameCard = ({ game }) => {

    const history = useHistory()
    
    return <section className="game__info" key={game.id}>
        <div className="game__title">VS: {game.opponent.handle} at {game.location}</div>
        <div className="game__players"> on {game.date_time} </div>
        <div className="game__description">Who won? {game.won ? "YOU!" : "Not you, unfortunately."}</div>
        <button className="game__review__button" class="btn" 
                onClick={ () => {
                    history.push({pathname: `/game/review/${game.id}`,
                    game: game})
                }}>Review Game</button>

    </section>


}







