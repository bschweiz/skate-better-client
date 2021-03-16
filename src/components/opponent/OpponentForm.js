import React, { useContext, useRef } from "react"
import { OpponentContext } from "./OpponentProvider"


export const OpponentForm = (props) => {
    // debugger
    const { addOpponentData } = useContext(OpponentContext)

    const petName = useRef(null)

    const constructNewOpponent = () => {

        // console.log(props)
        addOpponentData({
            trefleId: parseInt(props.location.state.chosenOpponent.id),
            userId: parseInt(localStorage.getItem("app_user_id")),
            petName: petName.current.value,
            imageURL: props.location.state.chosenOpponent.image_url
        })
            // .then(addTrefleNames({
            //     id: parseInt(props.location.state.chosenOpponent.id),
            //     commonName: props.location.state.chosenOpponent.common_name,
            //     scientificName:  props.location.state.chosenOpponent.scientific_name         
            // }))
            .then(() => props.history.push("/plants"))
    }

    return (
        <div className="wrapper">
            <form className="plantForm">
                <h2 className="plantForm__title">New Opponent</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="plantName">"Pet" name for your plant: </label>
                        <input type="text" id="plantName" ref={petName} required autoFocus className="form-control"
                            placeholder="Pet plant name"
                        />
                    </div>
                </fieldset>

                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewOpponent()
                    }}
                    className="btn btn-primary">
                    Save Opponent
            </button>
            </form>
        </div>
    )
}