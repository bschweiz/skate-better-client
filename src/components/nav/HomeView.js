  
import { render } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { HomeViewContext } from "./HomeViewProvider"

export const HomeView = (props) => {
    const history = useHistory()

    const { profile, getProfile } = useContext(HomeViewContext)
    
    useEffect(() => {
        getProfile()
    }, [])
    
    useEffect(() => {
        console.log(profile)
    }, [profile])
    

    return ( 
        <>
    
        <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <h1>Welcome Back Champ!</h1>
                <h3>{profile.handle}</h3>
                
                <button>Play New Game</button>
                <button>Review Old Games</button>
                <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("sb_token")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</button>
            </main>
        </>
            )    
    

}