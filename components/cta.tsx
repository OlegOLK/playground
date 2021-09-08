import styles from '../styles/Section.module.css'
import cx from 'classnames'
import Grid from './gird'
import useTranslation from 'next-translate/useTranslation'
import { NavigateToApp } from '../lib/navigate.to.app';
import { useRouter } from 'next/router'

export default function Cta() {
    const { t } = useTranslation('home')
    const router = useRouter();
    const goToApp = function () {
        NavigateToApp(router, "https://inside.iqube.app");
    }
    return (
        <>
            <section className={cx("w-full flex justify-center items-center bg-color-main", styles.cta)}>
                <Grid additionalStyles="h-full">
                    <div className={cx("col-start-1 col-span-4 lg:col-start-3 lg:col-span-8", styles.mt75)}>
                        <p className="text-cta text-white text-center">
                        {t('mainCTA')}
                        </p>

                        <p className="text-default text-center text-white mt-8">{t('secondaryCTA')}
                        </p>

                        <div className="w-full flex justify-center">
                            <button  onClick={goToApp} className="h-11 bg-white w-42 rounded-lg mt-14 shadow-default">
                            {t('Start for free')}
                            </button>
                        </div>
                    </div>
                </Grid>
            </section>
        </>
    )
}