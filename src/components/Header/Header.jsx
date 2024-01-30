import Link from "next/link";
import logo from '../../../assets/logo.png'
import pathsList, { CONSTANTS } from "./constants";
import styles from './header.module.css';
import Image from "next/image";

const Header = () => {
    const { pageTitle } = CONSTANTS;
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href='/' >
                <Image src={logo} alt="main-page-path" priority/>
                {pageTitle}
            </Link>
            <nav className={styles.nav}>
                <ul>
                    {pathsList.map(({ path, id, title }) => {
                        return <li key={id}>
                            <Link href={path}>{title}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    );
};
export default Header;