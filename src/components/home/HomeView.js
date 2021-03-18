

import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"
import { PastGameList } from "../game/PastGameList"
 
export const HomeView = (props) => {

    const history = useHistory()
    const [games, setGames] = useState([])
    const { profile, getProfile } = useContext(HomeViewContext)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        const myGames = profile.games
        console.log(profile)
        setGames(myGames)
    }, [profile])


    return (
        <>

            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <h1>Welcome Back Champ!</h1>
                <h3>{profile.handle}</h3>
                <h3>Your past games</h3>
                
                <PastGameList key={profile.id} profile={profile} props={props}/>

                <button className="nav-link"
                    onClick={() => {
                        props.history.push({ pathname: "/play" })
                    }}>Play New Game</button>

                <button>Review Old Games</button>

                <button className="nav-link"
                    onClick={() => {
                        localStorage.removeItem("sb_token")
                        history.push({ pathname: "/" })
                    }}>Logout</button>
            </main>
        </>
    )


}