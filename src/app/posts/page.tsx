import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getPosts } from '@/app/lib/local-data-reader';
import { PostsData } from '@/app/types/data-types';

export default function Posts() {

    const { posts }: PostsData = getPosts();

    const classes = {
        postMedia: {
            height: 250
        },
        postHeader: {
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20
        },
        postBottom: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }
    }

    return (
        <div>
            <Container fixed>
                <Typography variant="h1" align="center">
                    HÍREK
                </Typography>
                <Grid container justifyContent="center">
                    {posts.map(post => {
                        return (
                            <Grid xs={12} item key={post.id} style={{ marginBottom: 50 }}>
                                <Card style={{ height: "100%" }}>
                                    <CardMedia
                                        style={classes.postMedia}
                                        image={post.image.src}
                                    />
                                    <CardContent>
                                        <div style={classes.postHeader}>
                                            <Typography align="center" variant="h6" style={{ width: "100%" }}>
                                                {post.title}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body1">
                                                {post.body}
                                            </Typography>
                                        </div>
                                        <div style={classes.postBottom}>
                                            <Typography variant="overline">
                                                {post.date.toString()}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}