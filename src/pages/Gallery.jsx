import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/GalleryHero.png";
import Content from '../components/Content';
import News from '../components/News';
import Help from '../components/Help';

const Gallery = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Gallery"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Discover the story of HERD through our videos and images."
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

export default Gallery
