
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from '@/app/layout'
import Quote from '@/app/components/quote'
import CardImage from '@/app/components/cardImage';
import BackgroundVideo from '@/app/components/backgroundVideo';
import Carousel from '@/app/components/carousel';
import { getIndexData } from '@/app/lib/local-data-reader';
import { IndexData } from '@/app/types/data-types';


export default function Home() {

  const { video, introduction, cards, quotePart, photos } :IndexData = getIndexData();

  const classes: any = {
    titleContainer: {
      fontFamily: "Raleway,sans-serif"
    },
    sectionDivider: {
      marginTop: "8%",
    },
    photoContainer: {
      padding: 0,
      maxWidth: "100%"
    }
  };

  return (
    <div>
      <BackgroundVideo
        blur={2}
        videoSource={video.videoSource} >
        <Typography align="center" variant="h1">
          {video.title}
        </Typography>
        <Typography align="center" variant="h1">
          {video.subTitle}
        </Typography>
      </BackgroundVideo>
      <Container fixed style={classes.sectionDivider}>
        <div style={classes.titleContainer}>
          <Typography align="center" variant="h3">
            {introduction.title}
          </Typography>
        </div>
        <div style={classes.sectionDivider}>
          <Typography align="center" variant="h3">
            {introduction.subTitle}
          </Typography>
        </div>
      </Container>
      <Container fixed style={classes.sectionDivider}>
        <Grid container>
          {cards.map(card => {
            return (
              <Grid item key={card.id} md={4} sm={12} style={{width:"100%", padding: 20}}>
                <CardImage 
                  image={card.image}
                  title={card.title}
                  textTitle={card.textTitle}
                  text={card.text}>
                </CardImage>
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Container fixed style={classes.sectionDivider}>
        <Typography align="center" variant="h3">
          {quotePart.text}
        </Typography>
        <Grid container>
          {quotePart.quotes.map(quote => {
            return (
              <Grid  key={quote.id}  item md={4} sm={12} style={{width:"100%", padding: 20}}>
                <Quote id={quote.id} text={quote.text} author={quote.author} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Container style={{...classes.sectionDivider, ...classes.photoContainer}}>
        <Carousel photos={photos} />
      </Container>
    </div>
  )
}