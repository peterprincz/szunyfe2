"use client"
import React, { useState, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { AlbumProperties } from '@/app/types/data-types';;


export default function Album({ albumTitle, albumDesc, previewPhoto, photos }: AlbumProperties) {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, { index }: { index: number }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const classes = {
        card: {

        },
        previewImage: {
            height: 200
        }
    }
    return (
        <div>
            <Card style={classes.card}>
                <CardActionArea onClick={(e) => openLightbox(e, { index: 0 })}>
                    <CardMedia
                        style={classes.previewImage}
                        title={albumTitle}
                        image={previewPhoto.src}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography align='center' gutterBottom variant="h3">
                            {albumTitle}
                        </Typography>
                        {albumDesc ? <Typography variant="body1">
                            {albumDesc}
                        </Typography>
                            :
                            ''}
                    </CardContent>
                </CardActionArea>
            </Card>
            {viewerIsOpen ? (
                <Lightbox
                    mainSrc={photos[currentImage].src}
                    nextSrc={photos[(currentImage + 1) % photos.length].src}
                    prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={() => {
                        setCurrentImage((currentImage + photos.length - 1) % photos.length)
                    }}
                    onMoveNextRequest={() => {
                        setCurrentImage((currentImage + photos.length + 1) % photos.length)
                    }}
                />
            ) : null}
        </div>
    );
}




