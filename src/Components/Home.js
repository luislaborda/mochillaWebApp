import React, {useContext} from 'react'
import { db } from '../Base/firebase'
import { AuthContext } from '../Base/Auth'

function Home() {
  const { currentUser } = useContext(AuthContext)

    return (
      <>
        <h3>Home</h3>
        {currentUser.displayName}
        {currentUser.uid}
        <button onClick={() => db.auth().signOut()}>Salir</button>
      </>
    );
  }
  
  export default Home;
  