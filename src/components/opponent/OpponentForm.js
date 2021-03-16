import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from "react-router-dom"


export const GameForm = (props) => {
    const history = useHistory()
    const { createGame, getGameTypes, gameTypes, getGame } = useContext(GameContext)
    // provide default values so it doesn't break
    const [currentGame, setCurrentGame] = useState({
        description: "",
        numberOfPlayers: 0,
        maker: "",
        title: "",
        gameTypeId: 0
    })
    //  get game types on inicialixation so that <select> element presents choices
    useEffect(() => {
        getGameTypes()
    }, [])
    // useEffect to determine if this is in edit mode?
    useEffect(() => {
        debugger
        if ("gameId" in props.match.params) {
            getGame(props.match.params.gameId).then(game => {
                setCurrentGame({
                    description: game.description,
                    numberOfPlayers: game.number_of_players,
                    maker: game.maker,
                    title: game.title,
                    gameTypeId: game.game_type_id
                })
            })
        }
    }, [props.match.params.gameId])

    // update 'currentGame' state var cada vez que state of input field change
    const changeGameState = (DOMEvent) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[DOMEvent.target.name] = DOMEvent.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input type="text" name="maker" required autoFocus className="form-control"
                        value={currentGame.maker}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Minimum Number of Players: </label>
                    <input type="number" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Brief Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <label>Game Type</label>
                <select name="gameTypeId"
                    onChange={changeGameState}>
                    <option value="0">Select Game Type</option>
                    {gameTypes.map(gt => (
                        <option key={gt.id} value={gt.id}>
                            {gt.label}
                        </option>
                    ))}
                </select>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        maker: currentGame.maker,
                        title: currentGame.title,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        description: currentGame.description,
                        gameTypeId: parseInt(currentGame.gameTypeId)
                    }
                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}