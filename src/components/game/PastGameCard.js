import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./PastGameCard.css"



export const PastGameCard = ({ game }) => {

    return <section className="game__info" key={game.id}>
        <div className="game__title">Vs opponent id: {game.opponent.handle} at {game.location}</div>
        <div className="game__players"> on {game.date_time} players needed</div>
        <div className="game__description">Who won? {game.won ? "YOU!" : "Not you, unfortunately."}</div>

        </section>


}







