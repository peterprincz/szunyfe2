import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardImageProperties } from '@/app/types/data-types';;

export default function CardImage({title, image, textTitle, text }:CardImageProperties) {

    const classes = {
        card: {
            height: "100%",
            width:"100%",
            alignText:'center'
        },
        cardImage: {
            height: 800,
        }
    };
    return (
        <Card style={classes.card}>
            <CardActionArea>
                <CardMedia
                    style={classes.cardImage}
                    title={title}
                    image={image}
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {textTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

