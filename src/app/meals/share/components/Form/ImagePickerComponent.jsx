'use client';
import { useFormStatus } from 'react-dom';
import ImagePicker from "@/app/meals/components/Image-Picker/Image-Picker";
import classes from '../../page.module.css';

const ImagePickerComponent = () => {
    const { pending } = useFormStatus();
    return (
        <>
            <ImagePicker label='Image picker' name='image' />
            <p className={classes.actions}>
                <button disabled={pending} type="submit">{pending ? 'Submiting...' : 'Share Meal'}</button>
            </p>

        </>
    )
};
export default ImagePickerComponent;