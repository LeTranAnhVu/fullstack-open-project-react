import firebase from 'firebase/app';
import 'firebase/database';
import {firebaseConfig} from "./env";


firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const restaurantsRef = databaseRef.child("restaurants");