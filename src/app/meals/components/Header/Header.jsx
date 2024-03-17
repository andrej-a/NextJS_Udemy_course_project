import Link from 'next/link';
import classes from '../../styles/page.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favorite recipe and cook it yourself.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share Your Favorite Recipe</Link>
            </p>
        </header>
    )
};
export default Header;