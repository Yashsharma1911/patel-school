import React, { useEffect } from 'react'
import Gallery from 'react-photo-gallery'
import { db, storage } from "../lib/firebase.prod";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const photos = [

];
export default function GalleryImage() {
    useEffect(() => {
        const imageRef = ref(storage, `galleryImages`);
        const getLink = () => {
            listAll(imageRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        photos.push({
                            src: url,
                            width: 2,
                            height: 2
                        })
                    });
                });
            });
        }
        getLink();
    }, []);

    return (
        <Gallery photos={photos} />
    )
}
