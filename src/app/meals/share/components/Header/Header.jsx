import classes from '../../page.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>
                Share your <span className={classes.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
        </header>

    );
};
export default Header;