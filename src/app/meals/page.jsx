import classes from './page.module.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';
import meals_api from '@/api/meals';

const Meals = async () => {
    const meals = await meals_api.getAllMeals();
    return (
        <>
            <Header />
            <main className={classes.main}>
                <Grid meals={meals}/>
            </main>
        </>
    )
};
export default Meals;