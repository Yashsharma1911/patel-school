import React, { useEffect } from 'react'
// import Gallery from 'react-photo-gallery'
import { storage } from "../lib/firebase.prod";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import HeaderContainer from '../container/header'
import MaintenanceContainer from '../container/maintenance'

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
        <>
            <HeaderContainer />
            <MaintenanceContainer />
            {/* <Gallery photos={photos} /> */}
        </>
    )
}
