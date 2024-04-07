import ImagePicker from "@/app/meals/components/Image-Picker/Image-Picker";
import classes from '../../page.module.css';

const Controls = () => {
    return (
        <>
            <ImagePicker label='Image picker' name='image' />
            <p className={classes.actions}>
                <button type="submit">Share Meal</button>
            </p>

        </>
    )
};
export default Controls;