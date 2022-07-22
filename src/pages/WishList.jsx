import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/WishlistHero.png";
import Content from '../components/Content';
import News from '../components/News';


const WishList = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Help The Herd"}
                heroTitle="Our wishlist"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Thank you for donating towards our HERD wishlist items.
                PLEASE NOTE: that transactions on this page are received as DONATIONS towards the product purchase for use at HERD. 
                The actual products are not for sale."
            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default WishList
