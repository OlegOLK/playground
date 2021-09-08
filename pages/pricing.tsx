import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Grid from '../components/gird'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Section from '../components/section'
import Faq from '../components/faq'
import Cta from '../components/cta'
import Footer from '../components/footer';
import Disctord from '../components/lib/discord.button'

export default function Pricing() {
  const { t } = useTranslation('home')
  return (
    <>
      <div className="fixed lg:bottom-2 2xl:bottom-12 right-24 z-50 hidden lg:block">
        <Disctord />
      </div>
      <Main 
      header={t('pricingHeading')}
      subHeader={t('pricingSubHeading')}/>
      <Footer />
    </>
  )
}
