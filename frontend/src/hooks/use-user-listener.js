import { useState, useEffect } from 'react';
import UseAuthListener from './use-auth-listener';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../lib/firebase.prod';

export default function UseFirestoreData(collectionName) {
    const { user } = UseAuthListener();
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const getData = async () => {
      if (user && !loaded) {
        setLoaded(true);
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            if (doc.id === user.uid) {
                setData(doc.data());
                setShowLoader(false);
            } else {
                console.log("No data found")
                setShowLoader(false);
            }
        });
      }
    }
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loaded]);

    return { data, showLoader };
}