import React from "react"
import { Link } from "react-router-dom"
import "./Auth.css"

export const Register = (props) => {
    // this block for the Django User Table
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()
    // this block for Skater Table
    const handle = React.createRef()
    const goofy = React.createRef()
    const fav_skater = React.createRef()
    const fav_video = React.createRef()


    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "handle": handle.current.value,
                "goofy": false,
                "fav_skater": fav_skater.current.value,
                "fav_video": fav_video.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("sb_token", res.token)
                        props.history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="handle"> Nickname/Handle </label>
                    <input ref={handle} type="text" name="handle" className="form-control" placeholder="Handle" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="goofy"> Goofy/Regular? </label>
                    <input ref={goofy} type="boolean" name="handle" className="form-control" placeholder="Goofy?" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="favSkater"> Favorite Skater </label>
                    <input ref={fav_skater} type="text" name="handle" className="form-control" placeholder="Favorite Skater" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="favVideo"> Favorite Skate Video or Part </label>
                    <input ref={fav_video} type="text" name="handle" className="form-control" placeholder="Favorite Video" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}