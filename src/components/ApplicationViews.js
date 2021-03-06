
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
import { GamePlayReview } from "./game/GamePlayReview"
import { GameOver } from "./game/GameOver"


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
                                <Route exact path='/game/over' render={
                                    props => <GameOver {...props} />
                                }>
                                </Route>
                                <Route exact path='/game/review' render={
                                    props => <PastGameList {...props} />
                                }>
                                </Route>
                                <Route exact path='/game/review/:gameId(\d+)' render={
                                    props => <GamePlayReview {...props} />
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