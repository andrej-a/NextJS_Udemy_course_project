'use client'
import { useCallback, useRef } from 'react';
import classes from './classes.module.css';

const ImagePicker = ({ label, name }) => {
    const ref = useRef(null);
    
    const handlePickerClick = useCallback(() => { 
        if (ref.current) {
            ref.current.click();
        }
    }, [ref]);

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input ref={ref} className={classes.input} type='file' id='image' accept='image/png, image/jpeg' name={name} />
            <button onClick={handlePickerClick} className={classes.button} type='button'>Pick an image</button>
        </div>
    </div>
};
export default ImagePicker;
