"use client"
import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DrinkData } from '@/app/types/data-types';;

export default function DrinkList({categories, drinks}:DrinkData) {

    const [activeCategory, setActiveCategory] = React.useState({ id: 1 });

    const classes = {
        categoryButton: {
            width: "100%",
            color: "white",
            backgroundColor: "black",
            borderColor: "white"
        },
        activeCategoryButton: {
            width: "100%",
            color: "black",
            backgroundColor: "white",
            borderColor: "white"
        },
        drinkListContainer: {
            borderImage: "url(./drinkborder.png) 70 70 round",
            borderWidth: "30px",
            borderStyle: "solid",
            width: "80%",
            padding: "2%",
            margin:"auto",
        },
        drinkContainer: {
            textAlign: 'center' as const,
            marginTop: "5rem"
        }
    };

    return (
        <div>
            <Container fixed>
                <Grid container justifyContent="center">
                    {categories.map(category => {
                        const active = category.id == activeCategory.id
                        return (
                            <Grid key={category.id} item md={2} sm={12} xs={12} style={{ marginBottom: 10, marginLeft: 20, marginRight: 20 }}>
                                <Button key={category.id}
                                    variant="outlined"
                                    onClick={active ? () => { } : () => setActiveCategory({ id: category.id })}
                                    style={active ? classes.activeCategoryButton : classes.categoryButton}>
                                    {category.title}
                                </Button>
                            </Grid>)
                    })}
                </Grid>
            </Container>
            <Container fixed>
                <Typography align="center" variant="h3">
                    Ezekkel a finom italokkal várunk!
                </Typography>
                <div style={classes.drinkListContainer}>
                    {drinks
                        .filter(drink => drink.categoryId === activeCategory.id)
                        .map(drink => {
                            return (
                                <React.Fragment key={drink.id}>
                                    <div key={drink.id} style={classes.drinkContainer}>
                                        <Typography variant="h3" style={{ wordWrap: 'break-word' }}>
                                            {drink.title}
                                        </Typography>
                                        <Typography variant="h4">
                                            {drink.description}
                                        </Typography>
                                        <Typography variant="h4">
                                            {drink.price}
                                        </Typography>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                </div>
            </Container>
        </div>
    )

}

