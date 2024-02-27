import MealItem from '../Meal/Meal';
import classes from './grid.module.css';

const Grid = ({ meals }) => {
    return <ul className={classes.meals}>
        {meals.map((meal) => <li key={meal.id}>
            <MealItem {...meal} />
        </li>)}
    </ul>
};

export default Grid;
