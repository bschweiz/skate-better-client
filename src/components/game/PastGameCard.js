import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./PastGameCard.css"



export const PastGameCard = ({ game }) => {

    return <section className="game__info" key={game.id}>
        <div className="game__title">VS: {game.opponent.handle} at {game.location}</div>
        <div className="game__players"> on {game.date_time} </div>
        <div className="game__description">Who won? {game.won ? "YOU!" : "Not you, unfortunately."}</div>
        <Link to={{
                    pathname: `/game/${game.id}/review`,
                    state: { chosenGame: game }
                }}>Review Game</Link>

    </section>


}







