import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase.prod.js';

export default function UseAuthListener() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (User) => {
            if (User) {
                setUser(User);
            } else {
                setUser(null);
            }
        });
        return () => listener();
    }, []);
    return { user };
}
