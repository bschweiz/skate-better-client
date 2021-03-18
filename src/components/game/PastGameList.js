import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { HomeViewContext } from "../home/HomeViewProvider"
import { GameContext } from "./GameProvider"
import { PastGameCard } from "./PastGameCard"



export const PastGameList = (props) => {

    const [games, setGames] = useState([])
    const { allGames, getAllGames } = useContext(GameContext)
    const { profile, getProfile } = useContext(HomeViewContext)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        const myGames = profile.games
        console.log(profile)
        setGames(myGames)
    }, [profile])

    useEffect(() => {
        console.log("test to see if the array of results came back")
        console.log(games)
        }, [games])
        
    return <div className="past_game_list">Your Past Games:
    {
        games.map(game => <PastGameCard key={game.id} game={game} />)
    }
    </div>
    
    }