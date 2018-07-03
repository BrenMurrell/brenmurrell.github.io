import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const buildsRef = databaseRef.child("case-studies");
export const caseStudiesRef = databaseRef.child("case-studies");

//export const buildPartsRef = databaseRef.child("buildParts");
//export const partsRef = databaseRef.child("parts");

export const provider = new firebase.auth.GoogleAuthProvider();
