import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { PastGameCard } from "./PastGameCard"



export const PastGameList = (games) => {

    const { profile } = useContext(HomeViewContext)
        
    // useEffect(() => {
    //     console.log("test to see if the array of results came back")
    //     console.log(fuzzyResultArray)
    //     }, [fuzzyResultArray])
        
    return <div className="trefle_results">Your Results:
    {
        fuzzyResultArray.map(pla => <TrefleCard key={pla.id} plant={pla} />)
    }
    </div>
    
    }