

import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"

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
                { (profile.games) ?
                    {
                        profile.games.map(game => {
                            return <p>
                                <div className="game__title">Vs opponent id: {game.opponent} at {game.location}</div>
                                <div className="game__players"> on {game.date_time} players needed</div>
                                <div className="game__description">Who won? {game.won ? "YOU!" : "Not you, unfortunately."}</div>

                            </p>
                        }
                        )
                    }
                    : return <></>

                }

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