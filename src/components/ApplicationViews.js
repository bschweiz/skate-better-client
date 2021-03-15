
import React from "react"
import { Route } from "react-router-dom"

import { HomeView } from "./nav/HomeView"


export const ApplicationViews = (props) => {
    return (
        <>
            <HomeViewProvider>
                <Route exact path='/'>
                    <HomeView />
                </Route>
            </HomeViewProvider>
        </>
    )
}