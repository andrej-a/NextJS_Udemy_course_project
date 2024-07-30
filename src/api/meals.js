import fs from 'node:fs';
import sql from 'better-sqlite3';
import { getSlug, getXSSInformation } from '@/utils/utils';

const db = sql('meals.db');

const meals_api = {
    getAllMeals: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return db.prepare('SELECT * FROM meals').all();
    },
    getMealBySlug: async (slug) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
    },
    createMeal: async (meal) => {
        const slug = getSlug(meal.title);
        const instructions = getXSSInformation(meal.instructions);

        const extension = meal.image.name.split('.')[1];
        const imageName = `${slug}.${extension}`;

        const stream = fs.createWriteStream(`public/images/${imageName}`);
        const bufferedImage = await meal.image.arrayBuffer();
        stream.write(Buffer.from(bufferedImage), (error) => {
            if (error) throw new Error('Saving image failed!');
        });

        const image = `/images/${imageName}`;
        const result = {
            ...meal,
            image,
            instructions,
            slug
        };

        await new Promise((resolve) => setTimeout(resolve, 300));
        return db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
         )`).run(result);
    }
}
export default meals_api;