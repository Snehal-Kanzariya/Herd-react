import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/ShopHero.png"
import Content from '../components/Content'
import ContentGrid from '../components/ContentGrid'
import pGrid1 from '../assets/shopGrid1.png'
import pGrid2 from '../assets/MechandiseGrid.png'
import Help from '../components/Help';
import News from '../components/News';

const HerdShop = () => {
    const grid = [
        {
            image: pGrid1,
            title: 'Our Wishlist',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Shop Our Wishlist',
            isButton: true,
        },
        {
            image: pGrid2,
            title: 'Mechandise',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Shop Merchandise',
            isButton: true,
        },
    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"THe herd shop"}
                heroTitle="Make a Donation"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Helping the herd means lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet."
            />
            <div className="py-150">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-50 gap-x-25 px-25 sm:px-50">
                    {grid.map(item => {
                        return <ContentGrid image={item.image} title={item.title} description={item.description} buttonTxt={item.buttonTxt} isButton={item.isButton} isMb={item.isMb} />
                    })}
                </div>
            </div>
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

export default HerdShop