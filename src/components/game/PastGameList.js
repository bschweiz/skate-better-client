import React, { useEffect, useState, useContext } from "react"
import { useHistory } from 'react-router'
import { GameContext } from "./GameProvider"
import { PastGameCard } from "./PastGameCard"



export const PastGameList = ({ props }) => {
    const history = useHistory()
    const { allGames, getAllGames } = useContext(GameContext)
    const [games, setGames] = useState([])

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
            <div className="past_game_list">
                <h3>
                        Refresh Your Memory!
                </h3>
            <div className="past_games_scroll_container">
                {
                    games.map(game => <PastGameCard key={game.id} game={game} props={props} />)
                }
            </div>

            </div>
            <button className="nav-link"
                onClick={() => {
                    history.push({ pathname: "/" })
                }}>Home</button>
        </>
    )
}