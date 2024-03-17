import classes from './styles/page.module.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import meals_api from '@/api/meals';
import { Suspense } from 'react';
import Loading from './components/Preloader/Preloader';

const FetchingMeals = async () => {
    const meals = await meals_api.getAllMeals();
    return <Grid meals={meals} />;
};

const Meals = async () => {
    return (
        <>
            <Header />
            <main className={classes.main}>
                <Suspense fallback={<Loading />}>
                    <FetchingMeals />
                </Suspense>
            </main>
        </>
    )
};
export default Meals;