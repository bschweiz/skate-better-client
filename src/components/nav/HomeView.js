  
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"

export const HomeView = (props) => {
    const history = useHistory()

return (
    
    <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <h1>Welcome Back Champ!</h1>
            <button>Play New Game</button>
            <button>Review Old Games</button>
            <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("sb_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
        </main>
        )    
}