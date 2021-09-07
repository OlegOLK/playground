import styles from '../styles/Section.module.css'
import cx from 'classnames'
import Grid from './gird'

export default function Cta() {
    return (
        <>
            <section className={cx("w-full flex justify-center items-center bg-color-main", styles.cta)}>
                <Grid additionalStyles="h-full">
                    <div className={cx("col-start-1 col-span-4 lg:col-start-3 lg:col-span-8", styles.mt75)}>
                        <p className="text-cta text-white text-center">
                            Start tracking your <br />crypto-trades for free now
                        </p>

                        <p className="text-default text-center text-white mt-8">Join iQube to track your positive/negative
                            profits
                            <br />
                            and assets statistics according to portfolios and wallets.
                        </p>

                        <div className="w-full flex justify-center">
                            <button className="h-11 bg-white w-42 rounded-lg mt-14 shadow-default">
                                Start for free
                            </button>
                        </div>
                    </div>
                </Grid>
            </section>
        </>
    )
}