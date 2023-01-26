import { useState, useEffect } from 'react';
import UseAuthListener from './use-auth-listener';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../lib/firebase.prod';

export default function UseFirestoreData(collectionName) {
    const { user } = UseAuthListener();
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const getData = async () => {
      if (user && !loaded) {
        setLoaded(true);
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            if (doc.id === user.uid) {
                setData(doc.data());
            } else {
                console.log("No data found")
            }
        });
      }
    }
    useEffect(() => {
        getData();
    }, [user, loaded]);

    return { data };
}