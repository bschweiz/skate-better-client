
import React from "react"
import { Route } from "react-router-dom"

import { HomeView } from "./home/HomeView"
import { HomeViewProvider } from "./home/HomeViewProvider"
import { OpponentProvider } from "./opponent/OpponentProvider"
import { OpponentSelect } from "./opponent/OpponentSelect"
import { GameProvider } from "./game/GameProvider"
import { TrickProvider } from "./trick/TrickProvider"
import { GameTrickProvider } from "./gametrick/GameTrickProvider"
import { GamePlay } from "./game/GamePlay"
import { PastGameList } from "./game/PastGameList"


export const ApplicationViews = (props) => {
    return (
        <>
            <HomeViewProvider>
                <OpponentProvider>
                    <GameProvider>
                        <TrickProvider>
                            <GameTrickProvider>
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
                                <Route exact path='/game/review' render={
                                    props => <PastGameList {...props} />
                                }>
                                </Route>
                            </GameTrickProvider>
                        </TrickProvider>
                    </GameProvider>
                </OpponentProvider>
            </HomeViewProvider>
        </>
    )
}