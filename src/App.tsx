import './App.css'
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";
import { FirebaseContext } from "./contexts/FirebaseContext";
import type { DocumentData } from "firebase/firestore";

function App() {
  const app = initializeApp(firebaseConfig);
  const [thePages, setThePages] = useState<DocumentData>({});

  const fetchContent = async () => {
    const db = getFirestore(app);
    const pagesCollection = collection(db, 'pages');
    const pagesSnapshot = await getDocs(pagesCollection);
    const pagesList = pagesSnapshot.docs.map(doc => doc.data());
    pagesList.sort((a, b) => a.order - b.order);
    setThePages(pagesList);
  }
  
  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <FirebaseContext.Provider value={thePages}>
        <Navigation />
        <Outlet />
    </FirebaseContext.Provider>
  )
}

export default App
