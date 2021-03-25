

import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"
import './HomeView.css'


export const HomeView = (props) => {

    const history = useHistory()
    const { profile, getProfile } = useContext(HomeViewContext)

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <>

            <main>
                <div className="homeView-container">
                    <div className="welcome-banner">
                        <h2>Welcome Back Champ!</h2>
                    </div>

                    <div className="button-stack">
                        <button className="nav-link"
                            onClick={() => {
                                history.push({ pathname: "/play" })
                            }}>Play New Game</button>

                        <button className="nav-link"
                            onClick={() => {
                                history.push({ pathname: "/game/review" })
                            }}>Review Old Games</button>

                        <button className="log-out"
                            onClick={() => {
                                localStorage.removeItem("sb_token")
                                history.push({ pathname: "/" })
                            }}>Logout</button>
                    </div>
                </div>
            </main>
        </>
    )


}