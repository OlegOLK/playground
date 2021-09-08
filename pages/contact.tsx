import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Main from '../components/main'
import Footer from '../components/footer';
import Disctord from '../components/lib/discord.button'

export default function Contact() {
  const { t } = useTranslation('home')
  return (
    <>
      <div className="fixed lg:bottom-2 2xl:bottom-12 right-24 z-50 hidden lg:block">
        <Disctord />
      </div>
      <Main 
      header={t("stay tuned")}
      subHeader={t("soon")}/>
      <Footer />
    </>
  )
}
