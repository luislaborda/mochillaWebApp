import firebase from "firebase/app";
import { config } from '../appConfig'
import 'firebase/firestore'
import 'firebase/auth'

// firebase.initializeApp(config);
export const db = firebase.initializeApp(config);
export const baseDB = db.firestore();