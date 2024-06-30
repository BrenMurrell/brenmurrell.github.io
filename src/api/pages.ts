import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp(firebaseConfig);

export const fetchAllPages = async () => {
    const db = getFirestore(app);
    const pagesCollection = collection(db, 'pages');
    const pagesSnapshot = await getDocs(pagesCollection);
    const pagesList = pagesSnapshot.docs.map(doc => doc.data());
    pagesList.sort((a, b) => a.order - b.order);
    return (pagesList);
}