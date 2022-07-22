import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/MerchandiseHero.png"
import Content from '../components/Content'
import Help from '../components/Help';
import News from '../components/News';

const Merchandise = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"HERD Shop"}
                heroTitle="Merchandise"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Have a little bit of HERD to take home, All proceeds from our HERD Online Shop go to HERD Trust, to help us to support, care for and protect the elephant orphans and herd in our care and cover the immense costs of sustaining them from year to year at HERD"
                description1="Browse our collections below and feel free to email us at admin@herd.org.za with any questions."
            />
            <Help
                mainTitle="How you can help"
                mainParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                isBgGray={true}
            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default Merchandise
