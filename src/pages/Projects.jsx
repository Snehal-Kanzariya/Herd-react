import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/projectsHero.png"
import Content from '../components/Content';
import ContentGrid from '../components/ContentGrid'
import pGrid1 from '../assets/projectGrid1.png'
import pGrid2 from '../assets/projectsGrid2.png'
import pGrid3 from '../assets/projectsGrid3.png'
import pGrid4 from '../assets/projectsGrid4.png'
import pGrid5 from '../assets/projectsGrid5.png'
import Help from '../components/Help';
import News from '../components/News';

const Projects = () => {
    const grid = [
        {
            image: pGrid1,
            title: 'Orphan Programme',
            description: "Our elephant orphan programme started with a baby elephant named Jabulani, the very first elephant we 'adopted' in 2002. After seeing how a rescued herd from Zimbabwe successfully accepted him, we realised that we could significantly impact and save more elephant orphans.  ",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid2,
            title: 'Elephant Research',
            description: "Helping our herd starts with understanding them. Because elephants can't speak, it takes a lot of work to tune into their needs. Our team works tirelessly to research how to better help our elephants, from their carefully mixed and measured milk to setting up the best environment.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid3,
            title: 'Sustainability',
            description: "We aim to do everything we can to be as sustainable as possible, from how we feed our elephants, to protecting the land they live on. Our projects include using the elephants’ dung for several purposes, our on-site wormery, aquaponics, conservation research, and even rodent control.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid4,
            title: 'Community Projects',
            description: "Community matters to us. Without our local community, we will not be able to do what we do. We also believe that our actions have a ripple effect. We can make a bigger impact that spans generations by employing locals, contributing to local schools, and uplifting our women through the JabuLadies' projects. ",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid5,
            title: 'The drone project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            buttonTxt: 'Find Out More',
            isButton: true,
        },
    ]
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

            <div className="py-148">
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

export default Projects