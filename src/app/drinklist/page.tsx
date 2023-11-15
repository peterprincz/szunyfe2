import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '@/app/layout';
import { getDrinkData } from '@/app/lib/local-data-reader'
import { DrinkData } from '@/app/types/data-types'
import DrinkList from '../components/drinkList';

export default function DrinkListPage() {

    const {drinks, categories}:DrinkData = getDrinkData();

    return (
        <div>
            <Typography variant="h1" align="center">
                ITALLAP
            </Typography>
            <DrinkList
                categories={categories}
                drinks={drinks}
            />
        </div>
    )
}