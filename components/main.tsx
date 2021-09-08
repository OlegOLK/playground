import cx from 'classnames';
import styles from '../styles/Main.module.css';
import Grid from './gird';

type Props = {
    header: string,
    subHeader: string
}

export default function Main({header, subHeader}: Props) {
    return (
        <main className={cx("w-full flex justify-center items-center relative", styles.main)}>

            {/* SMALL PATTERNS */}
            <Grid additionalStyles="h-full absolute z-0 w-full">
                <div className="col-start-1 col-span-1 relative">
                    <img src="./assets/patterns/main/BTC.png" className="absolute left-0" height="43" width="58"
                        style={{ marginTop: "107px" }} ></img>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-1 relative">
                    <figure className="hidden lg:block small-cube -right-4 absolute" style={{ marginTop: "61px", height: "75px", width: "75px" }}>
                    </figure>
                    <p className="hidden lg:block dollar-symbol text-left" style={{ marginTop: "171px" }}>$</p>
                    <img src="./assets/patterns/main/chart.png" width="60" height="68" className="absolute -right-4"
                        style={{ marginTop: "285px" }} />
                </div>

                <div className="col-start-1 lg:col-start-6 col-span-1 relative">
                    <img src="./assets/patterns/main/plus.png" className="absolute -left-6" height="48" width="48"
                        style={{ marginTop: "22px" }} />
                </div>

                <div className="hidden lg:block col-start-8 col-span-1 relative">
                    <img src="./assets/patterns/main/BTC.png" className="absolute right-0" height="43" width="58"
                        style={{ marginTop: "581px" }} />
                </div>

                <div className="col-start-11 col-span-1 relative">
                    <img src="./assets/patterns/main/plus_big.png" className="absolute -left-8" height="64" width="64"
                        style={{ marginTop: "72px" }} />
                    <figure className="small-cube" style={{ marginTop: "476px" }}></figure>
                </div>

                <div className="col-start-12 col-span-1 relative">
                    <img src="./assets/patterns/main/symbol.png" height="44" width="34"
                        style={{ marginTop: "367px" }} ></img>
                </div>
            </Grid>

            {/* Big pattern blocks */}
            <div className="hidden	xl:block w-full h-full absolute z-0">
                <img src="./assets/patterns/main_left_pattern.png" height="500" width="500" className="absolute z-0"
                    style={{ top: "136px", height: "500px", width: "500px", maxWidth: "500px", left: "-250px", display: "inline-block" }} />

                <img src="./assets/patterns/main_right_pattern.png" height="500" width="500" className="absolute z-0"
                    style={{ top: "-24px", height: "500px", width: "500px", maxWidth: "500px", right: "-250px", display: "inline-block" }} />
            </div>

            {/* Main content */}
            <Grid additionalStyles="h-full relative">
                <div className="hidden absolute lg:block left-0 bottom-0">
                    <a href="#features" className={cx("flex items-center uppercase", styles.moreAbout)}>
                        <img src="./assets/features_anchor.png" className="inline mr-2" height="14" width="10"></img>
                        More about the app
                    </a>
                </div>

                <div className={cx("col-start-1 col-span-4 lg:col-start-3 lg:col-span-8", styles.mt)}>
                    <h1 className="h1 text-center">
                        {header}
                        
                    </h1>


                    <p className="text-default text-center mt-7 sm:mt-9">
                        {subHeader}
                    </p>
                    <div className="w-full flex justify-center">
                        <button
                            className={cx("h-11 shadow-default text-white bg-color-main rounded-lg mt-12 sm:mt-14", styles.button)}>
                            Get started
                        </button>
                    </div>

                </div>
                <div className="col-start-1 col-span-4 flex lg:hidden justify-center">
                    <a href="#features" className={cx("flex items-center bottom-0 uppercase", styles.moreAbout)}>
                        <img src="./assets/features_anchor.png" className="inline mr-2" height="14" width="10"></img>
                        More about the app
                    </a>
                </div>
            </Grid>
        </main>
    )
}