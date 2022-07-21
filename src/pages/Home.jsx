import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from '../assets/homeHero.png'

const Home = () => {
    return (
        <Layout>
            <div>
                <SectionHero
                    heroImage={heroImage}
                    heroTitle="a unique herd with a unique story"
                    isButton={true}
                    isBottom={true}
                />
            </div>
        </Layout>
    )
}

export default Home

// import Hero from '';