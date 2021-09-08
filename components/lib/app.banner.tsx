import cx from 'classnames';
import Image from 'next/image';

type Props = {
    hFull?: boolean,
    inverse?: boolean
}

export default function AppBanner({ hFull, inverse }: Props) {
    return (
        <a href="/" className={cx("flex items-center", hFull ? 'h-full' : '')}>
            <picture>
                <Image className="inline" height="32" width="32" src="/assets/logo_cube.png" />
            </picture>
            <p className={cx("ml-4 inline app-banner relative", inverse ? 'text-white' : '')}>
                iQube
                <span className="absolute inline-block text-center align-bottom text-white -top-2 pt-0.5 beta-badge">
                    beta
                </span>
            </p>
        </a>
    )
}