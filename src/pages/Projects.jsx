import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/projectsHero.png"
import Content from '../components/Content';
import Help from '../components/Help';
import News from '../components/News';

const Projects = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="projects"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="All of our HERD elephant orphanage projects are about respecting and acknowledging our elephants' unique and delicate needs that so desperately depend on us."
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

export default Projects