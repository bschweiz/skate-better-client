import React, { useEffect, useState, useContext } from "react"
import { useHistory } from 'react-router'
import { GameContext } from "./GameProvider"
import { PastGameCard } from "./PastGameCard"



export const PastGameList = ({props}) => {
    const history = useHistory()
    const { allGames, getAllGames } = useContext(GameContext)
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getAllGames()
    }, [])

    useEffect(() => {
        const games = allGames
        console.log(allGames)
        setGames(games.reverse())
    }, [allGames])

    return (
        <>
            <div className="past_game_list">Welcome Back Champ
                {
                    games.map(game => <PastGameCard key={game.id} game={game} props={props} />)
                }
            </div>

            <button className="nav-link"
                onClick={() => {
                    history.push({ pathname: "/" })
                }}>Home</button>
        </>
    )
}