import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';

export default function Disctord() {
    const { t } = useTranslation('home')

    return (
        <a
            href="https://discord.gg/SWzBKHEB" target="_blank" rel="noreferrer"
            className="shadow-lg cursor-pointer py-3 px-3 flex bg-white items-center justify-start text-base font-semibold rounded-lg h-16 w-72 ">
            <Image alt="discord" src="/assets/icons/discord.svg" width="36" height="40" className="inline" />
            <div className="text-left ml-2">
                <p className="discord-header">{t('getSupport')} </p>
                <p className="discord-sub">{t('joinDiscord')}</p>
            </div>
        </a>
    )
}
