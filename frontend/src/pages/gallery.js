import React, { useEffect, useState } from 'react'
import { storage } from "../lib/firebase.prod";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import HeaderContainer from '../container/header'
import LoaderContainer from '../container/loader'
import Gallery from '../components/gallery'
import ImageGallery from 'react-image-gallery';
import "./gallery.css";

const property = {
    showIndex: false,
    showBullets: false,
    infinite: true,
    showThumbnails: true,
    showFullscreenButton: true,
    showGalleryFullscreenButton: true,
    showPlayButton: true,
    showGalleryPlayButton: true,
    showNav: true,
    isRTL: false,
    slideDuration: 450,
    slideInterval: 2000,
    slideOnThumbnailOver: false,
    thumbnailPosition: 'bottom',
    showVideo: {},
    useWindowKeyDown: true,
}

export default function GalleryImage() {
    const [images, setImages] = useState([]);
    const [stateCheck, setStateCheck] = useState(false);
    useEffect(() => {
        let isMounted = true;
        const imageRef = ref(storage, `galleryImages`);
        const getLink = async () => {
            listAll(imageRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        if (isMounted) setImages(prev => [...prev, {
                            original: url,
                            thumbnail: url,
                            loading: "lazy"
                        }]);
                    });

                });
                if (isMounted) setStateCheck(true);
            });
        }
        getLink();

        // doing some clean up
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            <HeaderContainer />
            <Gallery>
                {stateCheck === true ? <ImageGallery items={images} {...property} /> : <LoaderContainer />}
            </Gallery>
        </>
    )
}
