'use server'
import {
    redirect
} from "next/navigation";
import meals_api from "./meals";

const keys = ['creator', 'creator_email', 'title', 'summary', 'instructions', 'image'];

export const createMeal = async (previousState, formData) => {
    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    };
    if (keys.some((k) => !meal[k])) {
        return {
            message: 'Invalid input!'
        }
    }
    await meals_api.createMeal(meal);
    redirect('/meals');
}