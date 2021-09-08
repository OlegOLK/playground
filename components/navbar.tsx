import Grid from "./gird";
import styles from '../styles/Navbar.module.css'
import cx from 'classnames';
import React, { useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import AppBanner from "./lib/app.banner";
import LanguageSwitcher from "./lib/language.switcher";

const MenuItems: string[] = [
    "features",
    "pricing",
    "contacts"
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
        <nav className={cx("h-14 lg:h-28 bg-white w-screen flex justify-between lg:justify-center items-center z-50 fixed top-0",
            scrollPosition != 0 ? "shadow-none lg:shadow-lg" : '')}>
            {/* Laptop + Desktop */}
            <Grid additionalStyles="hidden xl:grid">
                <div className="col-start-1 col-span-2">
                    <AppBanner />
                </div>


                <a 
                    href={"/"+ MenuItems[0]}
                    key={"menu-item-1"}
                    className={cx(
                        `text-uppercase col-start-5 col-span-1 text-center self-center justify-self-center`,
                        styles.navListItem)}>
                    {MenuItems[0]}
                </a>

                <a 
                href={"/"+ MenuItems[1]}
                    key={"menu-item-2"}
                    className={cx(
                        ` col-start-6 col-span-1 text-center self-center justify-self-center`,
                        styles.navListItem)}>
                    {MenuItems[1]}
                </a>
                <a
                href={"/"+ MenuItems[2]}
                    key={"menu-item-3"}
                    className={cx(
                        ` col-start-7 col-span-1 text-center self-center justify-self-center`,
                        styles.navListItem)}>
                    {MenuItems[2]}
                </a>
                {/* {
                    MenuItems.map((item, index) => {
                        return (
                            <a
                                key={"menu-item-" + index}
                                className={cx(
                                    ` col-start-${5 + index} col-span-1 text-center self-center justify-self-center`,
                                    styles.navListItem)}>
                                {item}
                            </a>
                        )
                    })
                } */}
                <LanguageSwitcher />
                {/* <button className={cx("col-start-8 col-span-1", styles.navListItem)}>
                    <p className="flex items-center color-main justify-end">
                        <img src="./assets/globe.png" height="17" width="16" className="inline mr-2"></img>
                        EN
                    </p>
                </button> */}

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

            {/* Tablet */}
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
                                <a key={"nav-a-" + index} className={cx(
                                    "text-center self-center justify-self-center",
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



            <Popover className="block lg:hidden w-screen">
                <Grid>
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

                    <Popover.Button className="col-start-4 col-span-1 flex justify-end content-center items-center h-full">
                        <span className="sr-only">Open menu</span>
                        <img src="/assets/icons/menu.svg" aria-hidden="true" />
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </Popover.Button>
                </Grid>


                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-100"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel style={{ height: "570px" }} className="absolute bg-color-main  top-14 inset-x-0 transition transform origin-top-right lg:hidden">
                        {
                            <div className="flex flex-col items-center mt-28 text-white space-y-8" >
                                <a href="/features" className="secondary-menu cursor-pointer no-underline hover:underline">{'Features'}</a>
                                <a href="/pricing" className="secondary-menu cursor-pointer no-underline hover:underline">{'Pricing'}</a>
                                <a href="/contacts" className="secondary-menu cursor-pointer no-underline hover:underline">{'Contact'}</a>

                                {/* <div className="col-start-9 col-span-1 self-center justify-self-end">
                                    <LanguageSwitcher reverseColor={true} />
                                </div> */}

                                <a
                                    href="/signup"
                                    className="self-center col-span-2 ripple shadow-lg w-44 py-3 text-center text-base font-semibold bg-white rounded-lg color-main ">
                                    Get Started
                                </a>
                            </div>
                        }
                    </Popover.Panel>
                </Transition>
            </Popover >
        </nav>
    )
}