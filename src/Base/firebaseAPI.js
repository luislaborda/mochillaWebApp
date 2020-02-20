import React from 'react'
import { baseDB } from './firebase'
import 'firebase/auth'

var user = null;

export const getAllUsers = () => {
    baseDB.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            return user = { ...doc.data()}  
        });
    });
}

function FirebaseAPI() {
    return (
        <>
        <button name="test" onClick={getAllUsers}>Test</button>
        <h3>user is {user ? user.parish : 'None' }</h3>
        </>
    )
}

export default FirebaseAPI