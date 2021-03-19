

import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"


export const HomeView = (props) => {

    const history = useHistory()
    const { profile, getProfile } = useContext(HomeViewContext)

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <>

            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <h1>Welcome Back Champ!</h1>
                <h3>{profile.handle}</h3>

                <button className="nav-link"
                    onClick={() => {
                        history.push({ pathname: "/play" })
                    }}>Play New Game</button>

                <button className="nav-link"
                    onClick={() => {
                        history.push({ pathname: "/game/review" })
                    }}>Review Old Games</button>

                <button className="nav-link"
                    onClick={() => {
                        localStorage.removeItem("sb_token")
                        history.push({ pathname: "/" })
                    }}>Logout</button>
            </main>
        </>
    )


}