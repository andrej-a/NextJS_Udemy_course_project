'use client'
import { useFormState } from 'react-dom';
import { createMeal } from '@/api/actions';
import classes from '../../page.module.css';
import Controls from './Controls';
import ImagePickerComponent from './ImagePickerComponent';

const Form = () => {
    const [state, formAction] = useFormState(createMeal, { message: null });
    return (
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>
                <Controls />
                {state.message && <p>{state.message}</p>}
                <ImagePickerComponent />
            </form>
        </main>
    )
}
export default Form;