import classes from './page.module.css';
import Link from 'next/link';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

const Meals = () => {
    return (
        <>
            <Header />
            <main className={classes.main}>
                <Grid meals={[]}/>
            </main>
        </>
    )
};
export default Meals;