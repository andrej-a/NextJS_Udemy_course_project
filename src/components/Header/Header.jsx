import Link from "next/link";
import logo from '../../../assets/logo.png'
import pathsList, { CONSTANTS } from "./constants";

const Header = () => {
    const { pageTitle } = CONSTANTS;
    return (
        <header>
            <Link href='/' >
                <img src={logo.src} alt="main-page-path" />
                {pageTitle}
            </Link>
            <nav>
                <ul>
                    {pathsList.map(({ path, id, title }) => {
                        return <Link key={id} href={path}>{title}</Link>
                    })}
                </ul>
            </nav>
        </header>
    );
};
export default Header;