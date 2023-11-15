import React from 'react';
import { getAlbums } from '@/app/lib/local-data-reader'
import Album from '@/app/components/album'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GalleryData } from '@/app/types/data-types';

export default function Gallery() {
    const {albums}:GalleryData = getAlbums();
    
    const classes = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        albumContainer: {
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: 5,
            marginRight: 5,
            width: "80%",

        },
        galleryContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
        }
    };
    albums.forEach((album, i) => album.id = i);

    return (
        <div>
            <div>
                <Typography variant="h1" align="center" gutterBottom>
                    GALLÉRIA
                </Typography>
                <Grid container justifyContent="center" spacing={8}>
                    {albums.map(album => {
                        return (
                            <Grid style={classes.albumContainer} key={album.id}>
                                <Album albumTitle={album.title} albumDesc={album.desc} previewPhoto={album.photos[0]} photos={album.photos} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

