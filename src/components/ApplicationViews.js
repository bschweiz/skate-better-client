
import React from "react"
import { Route } from "react-router-dom"

import { HomeView } from "./home/HomeView"
import { HomeViewProvider } from "./home/HomeViewProvider"
import { OpponentProvider } from "./opponent/OpponentProvider"
import { OpponentSelect } from "./opponent/OpponentSelect"


export const ApplicationViews = (props) => {
    return (
        <>
            <HomeViewProvider>
                <OpponentProvider>
                    <Route exact path='/' render={
                        props => <HomeView {...props} />
                    }>
                    </Route>
                    <Route exact path='/play' render={
                        props => <OpponentSelect {...props} />
                    }>
                    </Route>
                </OpponentProvider>
            </HomeViewProvider>
        </>
    )
}