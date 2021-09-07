import Grid from "./gird";
import styles from '../styles/Navbar.module.css'
import cx from 'classnames';
import { useEffect, useState } from "react";

const MenuItems: string[] = [
    "Features",
    "Pricing",
    "Contacts"
]

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={cx("h-14 lg:h-28 bg-white w-screen flex justify-center items-center z-50 fixed top-0",
            scrollPosition != 0 ? "shadow-none lg:shadow-lg" : '')}>
            {/* Laptop + Desktop */}
            <Grid additionalStyles="hidden xl:grid">
                <div className="col-start-1 col-span-2 flex items-center">
                    <picture>
                        <img className="inline" height="32" width="32" src="./assets/logo_cube.png" ></img>
                    </picture>
                    <p className={cx("ml-4 inline app-banner relative")}>
                        iQube
                        <span className="absolute text-center text-white -top-2 beta-badge">
                            beta
                        </span>
                    </p>
                </div>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <a className={cx(
                                "col-span-1 text-center self-center justify-self-center",
                                `col-start-` + (5 + index),
                                styles.navListItem)}>
                                {item}
                            </a>
                        )
                    })
                }
                <button className={cx("col-start-8 col-span-1", styles.navListItem)}>
                    <p className="flex items-center color-main justify-end">
                        <img src="./assets/globe.png" height="17" width="16" className="inline mr-2"></img>
                        EN
                    </p>
                </button>

                <button className="col-start-10 col-span-1 nav-list-item">
                    <p className="flex items-center color-main" style={{ textTransform: "none" }}>
                        <img src="./assets/user.png" height="17" width="16" className="inline mr-2"></img>
                        Sign in
                    </p>
                </button>

                <button className={cx(
                    "h-11 col-start-11 col-span-2 bg-color-main text-white rounded-lg ",
                    styles.shadowButton,
                    styles.getStartedButton)}>
                    Get started
                </button>
            </Grid>


            {/* </div> */}


            <Grid additionalStyles="hidden lg:flex xl:hidden 2xl:hidden items-center justify-between grid-w-full">

                <div className="flex items-center">
                    <picture>
                        <img className="inline" height="32" width="32" src="./assets/logo_cube.png" />
                    </picture>
                    <p className="ml-4 inline app-banner relative">
                        iQube
                        <span className="absolute text-center text-white -top-2 beta-badge">
                            beta
                        </span>
                    </p>
                </div>

                <div className="space-x-8">
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <a className={cx(
                                    "col-span-1 text-center self-center justify-self-center",
                                    styles.navListItem)}>
                                    {item}
                                </a>
                            )
                        })
                    }
                    <button className={styles.navListItem}>
                        <p className="flex items-center color-main justify-end">
                            <img src="./assets/globe.png" height="17" width="16" className="inline mr-2"></img>
                            EN
                        </p>
                    </button>
                </div>

                <button className={cx(
                    "h-11 bg-color-main text-white rounded-lg ",
                    styles.shadowButton,
                    styles.getStartedButton)}>
                    Get started
                </button>
            </Grid>

            <Grid additionalStyles="lg:hidden">
                <div className="col-start-1 col-span-2 flex items-center">
                    <picture>
                        <img className="inline" height="32" width="32" src="./assets/logo_cube.png" />
                    </picture>
                    <p className="ml-4 inline app-banner relative">
                        iQube
                        <span className="absolute text-center text-white -top-2 beta-badge">
                            beta
                        </span>
                    </p>
                </div>
                <button className="col-start-4 col-span-1 flex justify-end content-center items-center h-full">
                    <img src="/assets/icons/menu.svg" />
                </button>
            </Grid>
        </nav>
    )
}