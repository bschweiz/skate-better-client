import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { HomeViewContext } from "../home/HomeViewProvider"
import { GameContext } from "./GameProvider"
import { PastGameCard } from "./PastGameCard"



export const PastGameList = ({props}) => {

    const { allGames, getAllGames } = useContext(GameContext)
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames()
    }, [])

    useEffect(() => {
        const games = allGames
        console.log(allGames)
        setGames(games)
    }, [allGames])
        
    return <div className="past_game_list">Your Past Games:
    {
        games.map(game => <PastGameCard key={game.id} game={game} props={props}/>)
    }
    </div>
    
    }