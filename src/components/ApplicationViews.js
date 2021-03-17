
import React from "react"
import { Route } from "react-router-dom"

import { HomeView } from "./home/HomeView"
import { HomeViewProvider } from "./home/HomeViewProvider"
import { OpponentProvider } from "./opponent/OpponentProvider"
import { OpponentSelect } from "./opponent/OpponentSelect"
import { GamePlay } from "./game/GamePlay"
import { TrickProvider } from "./trick/TrickProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <HomeViewProvider>
                <OpponentProvider>
                <GameProvider>
                <TrickProvider>
                    <Route exact path='/' render={
                        props => <HomeView {...props} />
                    }>
                    </Route>
                    <Route exact path='/play' render={
                        props => <OpponentSelect {...props} />
                    }>
                    </Route>
                    <Route exact path='/game/new' render={
                        props => <GamePlay {...props} />
                    }>
                    </Route>
                </TrickProvider>
                </GameProvider>
                </OpponentProvider>
            </HomeViewProvider>
        </>
    )
}