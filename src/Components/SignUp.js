import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import { db } from '../Base/firebase'

const SignUp = ({history}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault()
    const {email, password} = event.target.elements
    try {
      await db.auth().createUserWithEmailAndPassword(email.value, password.value)
      history.push("/")
    } catch (error) {
      //TODO: Handle error better
      alert(error)
    }
  }, [history])
    
  return (
      <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>Correo Electronico 
          <input name="email" type="email" placeholder="Correo Electronico"/>
        </label>
        <label>Contraseña
          <input name="password" type="password" placeholder="Contraseña"/>
        </label>
        <button type="submit">Registrarse</button>
      </form>
      </>
    );
}

  
  export default withRouter(SignUp);
  