  
import React, { useContext, useEffect, useState } from 'react'
import { HomeViewContext } from "./HomeViewProvider";

export const HomeView = (props) => {


    
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
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
        </main>
}