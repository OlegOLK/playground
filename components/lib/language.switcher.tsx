import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Listbox, Transition } from '@headlessui/react'
import cx from 'classnames';
import styles from '../../styles/Navbar.module.css'

import i18nConfig from '../../i18n.json';
const locales = i18nConfig.locales.map(lc => lc.toUpperCase());

type Props = {
    reverseColor?: boolean
}

export default function LanguageSwitcher({ reverseColor }: Props) {
    const { t, lang } = useTranslation();
    const [selected, setSelected] = useState(lang.toUpperCase())
    const router = useRouter();
    const { locale } = router;

    function handleChange(value: string) {
        setSelected(value)
        router.push('/', null, ({ locale: value.toLowerCase() }));
    }

    return (

        //     <button className={cx("col-start-8 col-span-1", styles.navListItem)}>
        //     <p className="flex items-center color-main justify-end">
        //         <img src="./assets/globe.png" height="17" width="16" className="inline mr-2"></img>
        //         EN
        //     </p>
        // </button>
        // flex items-center justify-center
        <div className="col-start-8 col-span-1 flex items-center">
            <Listbox value={selected} onChange={handleChange}>
                {/* <div className="relative mt-1"> */}
                <Listbox.Button className={cx(styles.navListItem)}>
                    <p className=" color-main justify-end">
                        <img src="./assets/globe.png" height="17" width="16" className="inline mr-2"></img>
                        EN
                    </p>
                    {/* <img
                    src="/assets/test/globe.svg"
                    className="text-gray-400 main-color"
                    height={16}
                    width={16}
                    aria-hidden="true"
                />
                <span className="block ml-2 right-0 uppercase">{selected}</span> */}

                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options style={{bottom: "-35px", marginLeft:"-10px"}} className="absolute w-16 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {locales.map((locale, localeIdx) => (
                            <Listbox.Option
                                key={localeIdx}
                                className={({ active }) =>
                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                        cursor-default hover:bg-gray-100 select-none relative text-center
                                        ${reverseColor ? 'text-white' : 'main-color'}`

                                }
                                value={locale}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${selected ? 'font-medium bg-main-color text-white' : 'font-normal'
                                                } block truncate py-2`}
                                        >
                                            {locale}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
                {/* </div> */}
            </Listbox>
        </div>
    )
}