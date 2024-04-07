'use client'
import { useCallback, useRef, useState } from 'react';
import classes from './classes.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const [image, setImage] = useState(null);

    const ref = useRef(null);
    const handlePickerClick = useCallback(() => {
        if (ref.current) {
            ref.current.click();
        }
    }, [ref]);

    const handleChangeImage = useCallback((e) => {
        const file = e.target.files[0];
        if (!file) {
            setImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImage(fileReader.result);
        };
    }, []);

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={name}>{label}</label>
                <div className={classes.controls}>
                    <div className={classes.preview}>
                        {image ? <Image src={image} alt='user_image' fill /> : <p>No one image was download</p>}
                    </div>
                    <input required ref={ref} onChange={handleChangeImage} className={classes.input} type='file' id='image' accept='image/png, image/jpeg' name={name} />
                    <button onClick={handlePickerClick} className={classes.button} type='button'>Pick an image</button>
                </div>
            </div>
        </>
    )
};
export default ImagePicker;
