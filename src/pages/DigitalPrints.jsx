import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/digitalHero.png"
import Content from '../components/Content'
import News from '../components/News'

const DigitalPrints = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"HERD Shop"}
                heroTitle="Digital prints"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="You can support HERD by purchasing one of our high res images from our HERD Digital Print Shop! Some of our photographs are kindly donated by supporters to help us raise funds, we mention their names, and at checkout, you will find a link to their websites where applicable. Keep checking this page for new photo uploads."
            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default DigitalPrints