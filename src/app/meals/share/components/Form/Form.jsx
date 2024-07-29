import classes from '../../page.module.css';
import Controls from './Controls';
import ImagePickerComponent from './ImagePickerComponent';
import { createMeal } from '@/api/actions';

const Form = () => {
    return (
        <main className={classes.main}>
            <form className={classes.form} action={createMeal}>
                <Controls />
                <ImagePickerComponent />
            </form>
        </main>
    )
}
export default Form;