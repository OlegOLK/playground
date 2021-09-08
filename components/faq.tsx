import styles from '../styles/Section.module.css'
import cx from 'classnames'
import Grid from './gird'
import React from 'react'
import { Accordion } from './lib/accordion'
import useTranslation from 'next-translate/useTranslation'

export default function Faq() {
    const { t } = useTranslation('home')
    return (
        <>
            <section className={cx("w-full flex justify-center items-center relative",
                styles.section,
                styles.faqBg)}>

                <Grid additionalStyles="h-full absolute z-0 hidden lg:grid">
                    <div className="relative col-span-1 col-start-1 z-0">
                        <figure className="small-cube absolute" style={{ top: "499px", height: "75px", width: "75px" }}>
                        </figure>
                    </div>
                    <div className="relative col-span-1 col-start-2 z-0">
                        <figure className="small-cube absolute -left-4" style={{ top: "419px", height: "75px", width: "75px" }}>
                        </figure>
                    </div>

                    <div className="relative col-span-1 col-start-3 z-0">
                        <figure className="small-cube absolute" style={{ top: "73px", height: "75px", width: "75px" }}>
                        </figure>
                    </div>

                    <div className="relative col-span-1 col-start-12 z-0">
                        <figure className="small-cube absolute" style={{ top: "145px", right: "-150px", height: "75px", width: "75px" }}>
                        </figure>
                    </div>



                </Grid>

                <Grid additionalStyles="h-full">
                    <div className="col-span-4 col-start-1 mt-36 z-40">
                        <picture>
                            <img height="32" width="32" src="./assets/cube.png" />
                        </picture>
                        <p className={cx("text-h2 text-left", styles.header)}>{t('FAQs')}</p>

                        <p className="text-default text-left mt-6">{t('FAQsubheader')}</p>
                    </div>

                    <div className="col-span-4 col-start-1 lg:col-span-8 lg:col-start-5 mt-14 lg:mt-36 w-full z-40 space-y-5">
                        <Accordion  header={t('question1')} subHeader={t('answer1')} />
                        <Accordion  header={t('question2')} subHeader={t('answer2')} />
                        <Accordion  header={t('question3')} subHeader={t('answer3')} />
                        <Accordion  header={t('question4')} subHeader={t('answer4')} />
                    </div>
                </Grid>
            </section>
        </>
    )
}