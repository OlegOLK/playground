import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage';
import { Listbox, Transition } from '@headlessui/react'
import cx from 'classnames';
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image';

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

   async function handleChange(value: string) {
        setSelected(value)
        setLanguage(value.toLowerCase());
    }

    return (
        <div className="col-start-8 col-span-1 flex items-center">
            <Listbox value={selected} onChange={handleChange}>

                <Listbox.Button aria-label="Language switcher" className={cx(styles.navListItem)}>
                    <p className="color-main justify-end">
                        <img  src="/assets/globe.png" height="17" width="16" className="inline-block mr-2" />
                        {selected}
                    </p>

                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options style={{bottom: "-30px"}} className="absolute w-16 overflow-auto text-base bg-white shadow-lg max-h-60 sm:text-sm">
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
                                            className={`${selected ? 'font-medium bg-color-main rounded-sm text-white' : 'font-normal'
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