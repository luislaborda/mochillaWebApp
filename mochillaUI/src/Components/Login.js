import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router'
import { db } from '../Base/firebase'
import { AuthContext } from '../Base/Auth'

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const {email, password} = event.target.elements
            try {
                await db.auth().signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                //TODO: handle error better
                alert(error)
            }
        }, [history]
    )

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label>Correo Electronico 
            <input name="email" type="email" placeholder="Correo Electronico"/>
            </label>
            <label>Contraseña
            <input name="password" type="password" placeholder="Contraseña"/>
            </label>
            <button type="submit">Acceder</button>
        </form>
      </div>
    );
  }
  
  export default withRouter(Login);
  