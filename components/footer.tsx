import styles from '../styles/Footer.module.css'
import cx from 'classnames'
import Grid from './gird'
import React, { ReactNode } from 'react'
import AppBanner from './lib/app.banner'

type Breadcrumb = {
    header: string;
    subHeaders?: string[];
    node?: ReactNode
}

const Breadcrumbs: Breadcrumb[] = [
    {
        header: "Product",
        subHeaders: [
            "Features",
            "How it works",
            "Pricing"
        ]
    },
    {
        header: "Company",
        subHeaders: [
            "Our team",
            "Policies",
            "Terms and conditions"
        ]
    },
    {
        header: "Contacts",
        subHeaders: [
            "info@iqbue.app",
            "123321321",
            "12321321"
        ]
    },
    {
        header: "Mobile",
        node: (
            <div className="flex flex-col">
                <button className="bg-none">
                    <img src="/assets/google_play.png" width="117" height="29" />
                </button>
                <button className="bg-none mt-4">
                    <img src="/assets/app_store.png" width="111" height="30" />
                </button>
            </div>
        )
    },
    {
        header: "Social",
        node: (
            <div key={"menu-link"} className="flex flex-row lg:flex-col xl:flex-row ">
                <a key={"a-menu-link-1"}><img src="/assets/icons/twitter.svg" height="13" width="16" className="inline" /></a>
                <a key={"a-menu-link-2"}><img src="/assets/icons/linkedin-in.svg" height="14" width="14" className="inline ml-2.5 lg:ml-0 xl:ml-2.5" /></a>
                <a key={"a-menu-link-3"}><img src="/assets/icons/telegram-plane.svg" height="11.74" width="14" className="inline ml-2.5 lg:ml-0 xl:ml-2.5" /></a>
            </div>
        )
    }
]

export default function Footer() {
    function getProperIndex(index) {
        var updated = 1 + index * 2;
        return updated > 4 ? updated % 4 : updated;
    }
    return (
        <footer className={cx("w-full flex justify-center flex-wrap items-center", styles.footer, styles.bg)}>
            <Grid additionalStyles={cx("h-full hidden lg:grid", styles.pt)}>
                <div className="col-start-1 col-span-2">
                    <AppBanner hFull={false} inverse={true} />
                </div>

                {
                    Breadcrumbs.map((item, index) => {
                        return (
                            <div className={cx(
                                `col-start-${3 + (index * 2)}`,
                                index == 4 ? 'col-span-1' : "col-span-2",
                                styles.listMt)}
                                key={"head-" + index + item.header}>
                                <p key={"p-" + index + item.header} className={cx("mb-3", styles.listHeader)}>{item.header}</p>
                                {
                                    item.subHeaders ? (
                                        <ul
                                            key={"ul-" + index + item.header}
                                            className={cx("space-y-2 text-white", styles.listItem)}>
                                            {
                                                item.subHeaders.map((sub, index) => {
                                                    return (
                                                        <li key={"sub-" + index + item.header}>
                                                            {sub}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) :
                                        (
                                            item.node
                                        )
                                }

                            </div>
                        )
                    })
                }

                <div className="block col-start-12 col-span-1">
                    <a href="#" className={cx("bg-none flex justify-center items-center", styles.topButton)}>
                        <img src="/assets/icons/arrow-top.svg" height="8" width="8" />
                    </a>

                </div>
            </Grid>

            <div className={cx("h-full lg:hidden w-full", styles.pt)}>
                <Grid additionalStyles="gap-y-12">
                    <div className="col-start-1 col-span-2">
                        <AppBanner hFull={false} inverse={true} />
                    </div>
                    <div className="flex col-start-4 col-span-1 justify-end">
                        <a href="#" className={cx("bg-none flex justify-center items-center", styles.topButton)}>
                            <img src="/assets/icons/arrow-top.svg" height="8" width="8" />
                        </a>
                    </div>

                    {
                        Breadcrumbs.map((item, index) => {
                            return (
                                <div className={cx("col-span-2",
                                    `col-start-${getProperIndex(index)}`,
                                    index == 4 ? 'col-span-1' : "",
                                    styles.listMt)}
                                    key={"head-" + index + item.header}>
                                    <p className={cx("mb-3", styles.listHeader)}>{item.header}</p>
                                    {
                                        item.subHeaders ? (
                                            <ul className={cx("space-y-2 text-white", styles.listItem)}>
                                                {
                                                    item.subHeaders.map((sub, index) => {
                                                        return (
                                                            <li key={"sub-" + index + item.header}>
                                                                {sub}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        ) :
                                            (
                                                item.node
                                            )
                                    }

                                </div>
                            )
                        })
                    }
                </Grid>
            </div>
            <div className={cx("bottom-0 footer-bg w-full flex justify-center items-center", styles.bg, styles.copyrightsBorder)}
                style={{ height: "34px" }}>
                <p className={cx("text-center", styles.copyrights)}>©2021 - iQube | All rights reserved</p>
            </div>
        </footer>
    )
}
