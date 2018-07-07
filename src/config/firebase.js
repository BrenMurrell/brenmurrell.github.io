import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();


export const caseStudiesRef = databaseRef.child("case-studies").orderByChild('order');
export const caseStudyRef = databaseRef.child("case-studies");

//export const buildPartsRef = databaseRef.child("buildParts");
//export const partsRef = databaseRef.child("parts");

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

