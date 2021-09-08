import cx from 'classnames';

type Props = {
    hFull?: boolean,
    inverse?: boolean
}

export default function AppBanner({ hFull, inverse }: Props) {
    return (
        <a href="#" className={cx("flex items-center", hFull ? 'h-full' : '')}>
            <picture>
                <img className="inline" height="32" width="32" src="./assets/logo_cube.png" ></img>
            </picture>
            <p className={cx("ml-4 inline app-banner relative", inverse ? 'text-white' : '')}>
                iQube
                <span className="absolute text-center text-white -top-2 beta-badge">
                    beta
                </span>
            </p>
        </a>
    )
}