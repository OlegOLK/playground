import styles from '../styles/Footer.module.css'
import cx from 'classnames'
import Grid from './gird'
import { ReactNode } from 'react'

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
            <div className="flex flex-row lg:flex-col xl:flex-row ">
                <a><img src="/assets/icons/twitter.svg" height="13" width="16" className="inline" /></a>
                <a><img src="/assets/icons/linkedin-in.svg" height="14" width="14" className="inline ml-2.5 lg:ml-0 xl:ml-2.5" /></a>
                <a><img src="/assets/icons/telegram-plane.svg" height="11.74" width="14" className="inline ml-2.5 lg:ml-0 xl:ml-2.5" /></a>
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
                    <div className="flex items-center">
                        <picture>
                            <img className="inline" height="32" width="32" src="./assets/logo_cube.png"></img>
                        </picture>
                        <p className="ml-4 inline app-banner text-white relative">
                            iQube
                            <span className="absolute text-center -top-2 beta-badge">
                                beta
                            </span>
                        </p>
                    </div>
                </div>

                {
                    Breadcrumbs.map((item, index) => {
                        return (
                            <div className={cx("col-span-2",
                                `col-start-${3 + (index * 2)}`,
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

                <div className="block col-start-12 col-span-1">
                    <button className={cx("bg-none flex justify-center items-center", styles.topButton)}>
                        <img src="/assets/icons/arrow-top.svg" height="8" width="8" />
                    </button>

                </div>
            </Grid>


            <Grid additionalStyles={cx("h-full lg:hidden", styles.pt)}>
                <div className="col-start-1 col-span-2">
                    <div className="flex items-center">
                        <picture>
                            <img className="inline" height="32" width="32" src="./assets/logo_cube.png"></img>
                        </picture>
                        <p className="ml-4 inline app-banner text-white relative">
                            iQube
                            <span className="absolute text-center -top-2 beta-badge">
                                beta
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex col-start-4 col-span-1 justify-end">
                    <button className={cx("bg-none flex justify-center items-center", styles.topButton)}>
                        <img src="/assets/icons/arrow-top.svg" height="8" width="8" />
                    </button>
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


            <div className={cx("bottom-0 footer-bg w-full flex justify-center items-center", styles.bg, styles.copyrightsBorder)}
                style={{ height: "34px" }}>
                <p className={cx("text-center", styles.copyrights)}>©2021 - iQube | All rights reserved</p>
            </div>
        </footer>
    )
}


{/* <div style={{ marginBottom: "71px;" }}
                className="grid md:hidden grid-flow-row gap-5 grid-w-full grid-cols-4 h-full footer-pt ">
                <div className="col-start-1 col-span-2">
                    <div className="flex items-center">
                        <picture>
                            <img className="inline" height="32" width="32" src="./assets/logo_cube.png" />
                        </picture>
                        <p className="ml-4 inline app-banner text-white relative">
                            iQube
                            <span className="absolute text-center -top-2 beta-badge">
                                beta
                            </span>
                        </p>
                    </div>
                </div>

                <div className="col-start-4 col-span-1">
                    <button className="bg-none footer-top-button flex justify-center items-center">
                        <img src="/assets/icons/arrow-top.svg" height="8" width="8" />
                    </button>

                </div>

                <div className="col-span-2 footer-list-mt">
                    <p className="mb-3 footer-list-header-text">Product</p>

                    <ul className="space-y-2 text-white footer-list-item-text">
                        <li>
                            Features
                        </li>
                        <li>
                            How it works
                        </li>
                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 footer-list-mt">
                    <p className="mb-3 footer-list-header-text">Company</p>

                    <ul className="space-y-2 text-white footer-list-item-text">
                        <li>
                            Features
                        </li>
                        <li>
                            How it works
                        </li>
                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 footer-list-mt">
                    <p className="mb-3 footer-list-header-text">Contacts</p>

                    <ul className="space-y-2 text-white footer-list-item-text">
                        <li>
                            Features
                        </li>
                        <li>
                            How it works
                        </li>
                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 footer-list-mt">
                    <p className="mb-3 footer-list-header-text">Mobile</p>

                    <button className="bg-none">
                        <img src="/assets/google_play.png" width="117" height="29" />
                    </button>
                    <button className="bg-none pt-2">
                        <img src="/assets/app_store.png" width="111" height="30" />
                    </button>
                </div>

                <div className="col-span-1 footer-list-mt">
                    <p className="mb-3 footer-list-header-text">Social</p>

                    <a><img src="/assets/icons/twitter.svg" height="13" width="16" className="inline" /></a>
                    <a><img src="/assets/icons/linkedin-in.svg" height="14" width="14" className="inline"
                        style={{ marginLeft: "5px" }} /></a>
                    <a><img src="/assets/icons/telegram-plane.svg" height="11.74" width="14" className="inline"
                        style={{ marginLeft: "5px" }} /></a>
                </div>


            </div> */}