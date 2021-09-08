import Grid from "./gird";
import styles from '../styles/Navbar.module.css'
import cx from 'classnames';
import React, { useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import AppBanner from "./lib/app.banner";
import LanguageSwitcher from "./lib/language.switcher";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
import { NavigateToApp } from '../lib/navigate.to.app';
import { useRouter } from 'next/router'

const MenuItems: string[] = [
    "features",
    "pricing",
    "contact"
]

export default function Navbar() {
    const { t, lang } = useTranslation('home');
    const router = useRouter();
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
    const goToApp = function () {
        NavigateToApp(router, "https://inside.iqube.app/auth");
    }
    return (
        <nav className={cx("h-14 lg:h-28 bg-white w-screen flex justify-between lg:justify-center items-center z-50 fixed top-0",
            scrollPosition != 0 ? "shadow-none lg:shadow-lg" : '')}>
            {/* Laptop + Desktop */}
            <Grid additionalStyles="hidden xl:grid">
                <div className="col-start-1 col-span-2">
                    <AppBanner />
                </div>


                <Link href={MenuItems[0]} locale={lang}>
                    <p
                        key={"menu-item-1"}
                        className={cx(
                            `text-uppercase col-start-5 col-span-1 text-center self-center justify-self-center`,
                            styles.navListItem)}>
                        {t(MenuItems[0])}
                    </p>
                </Link>

                <Link href={MenuItems[1]} locale={lang}>
                    <p
                        key={"menu-item-2"}
                        className={cx(
                            ` col-start-6 col-span-1 text-center self-center justify-self-center`,
                            styles.navListItem)}>
                        {t(MenuItems[1])}
                    </p>
                </Link>
                <Link href={MenuItems[2]} locale={lang}>
                    <p
                        key={"menu-item-3"}
                        className={cx(
                            ` col-start-7 col-span-1 text-center self-center justify-self-center`,
                            styles.navListItem)}>
                        {t(MenuItems[2])}
                    </p>
                </Link>               
                <LanguageSwitcher />
                <button onClick={goToApp} className="col-start-10 col-span-1 nav-list-item">
                    <p className="flex items-center color-main" style={{ textTransform: "none" }}>
                        <img src="./assets/user.png" height="17" width="16" className="inline mr-2"></img>
                        {t('Sign in')}
                    </p>
                </button>

                <button
                    onClick={goToApp}
                    className={cx(
                        "h-11 col-start-11 col-span-2 bg-color-main text-white rounded-lg ",
                        styles.shadowButton,
                        styles.getStartedButton)}>
                    {t('Get Started')}
                </button>
            </Grid>

            {/* Tablet */}
            <Grid additionalStyles="hidden lg:flex xl:hidden 2xl:hidden items-center justify-between grid-w-full">

                <AppBanner />
                <div className="space-x-8">
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <Link href={item} locale={lang}>
                                    <p
                                        key={"nav-a-" + index} className={cx(
                                            "text-center self-center justify-self-center",
                                            styles.navListItem)}>
                                        {t(item)}
                                    </p>
                                </Link>
                            )
                        })
                    }
                    <LanguageSwitcher />
                </div>

                <button
                    onClick={goToApp}
                    className={cx(
                        "h-11 bg-color-main text-white rounded-lg ",
                        styles.shadowButton,
                        styles.getStartedButton)}>
                    {t('Get Started')}
                </button>
            </Grid>



            <Popover className="block lg:hidden w-screen">
                <Grid>
                    <div className="col-start-1 col-span-2 flex items-center">
                        <AppBanner />
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
                                <Link href="features" locale={lang} > <p className="secondary-menu cursor-pointer no-underline hover:underline">{t(MenuItems[0])}</p></Link>
                                <Link href="pricing" locale={lang} > <p className="secondary-menu cursor-pointer no-underline hover:underline">{t(MenuItems[1])}</p></Link>
                                <Link href="contacts" locale={lang} > <p className="secondary-menu cursor-pointer no-underline hover:underline">{t(MenuItems[2])}</p></Link>
                                <a
                                    onClick={goToApp}
                                    className="self-center col-span-2 ripple shadow-lg w-44 py-3 text-center text-base font-semibold bg-white rounded-lg color-main ">
                                    {t('Get Started')}
                                </a>
                            </div>
                        }
                    </Popover.Panel>
                </Transition>
            </Popover >
        </nav>
    )
}