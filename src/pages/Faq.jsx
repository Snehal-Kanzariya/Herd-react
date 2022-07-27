import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/faqHero.png";
import Content from '../components/Content';
import News from '../components/News';
import Help from '../components/Help';

const Faq = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="FAQ’s"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="We are very active on social media, sharing our daily updates with the world -and are fortunate to have new followers every day that have many questions about the elephants in our care. Our FAQ page is to assist with answer questions that are often asked or require
                longer explanations."
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

export default Faq
