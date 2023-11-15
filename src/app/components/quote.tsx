import styles from './quote.module.css'
import Typography from '@mui/material/Typography';
import { Quote } from '@/app/types/data-types';


export default function Qoute({text, author}:Quote) {
    return (
        <div className={styles['quote-wrapper']}>
            <blockquote className={styles.text}>
                <Typography align="center"  variant="body1">
                        {text}
                    </Typography>
                <footer>
                    <Typography align="center" variant="overline">
                        {author}
                    </Typography>
                </footer>
            </blockquote>
        </div>
    )
}