import React from 'react'
import Layout from '../components/Layout'
import heroImage from "../assets/elephantHero.png"
import SectionHero from '../components/SectionHero'
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import experience1 from '../assets/experience1.png'
import experience2 from '../assets/experience2.png'
import Help from '../components/Help'
import News from '../components/News'

const Experiance = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Elephants’ experience"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Ever wanted to know what it would belike to be a elephant for a day?  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Join them in their day, respectfully, consectetur adipiscing elit."
                description1="Join them in their day, respectfully, consectetur adipiscing elit."
            />
            <Zigzag
                zigzagImg={experience1}
                isPr={false}
                isPb={true}
                isReverse={true}
                title={"In the morning"}
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "}
                buttonText={"Fundraise"}
                isButton={false}

            />
            <Zigzag
                zigzagImg={experience2}
                isPr={false}
                isReverse={false}
                title={"After Lunch"}
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "}
                paragraph1="Join the elephants after their afternoon walk for Elelphant moments,
                meet the 3 bulls from the herd, respectfully, eiusmod tempor incididunt ut labore et dolore magna aliqua."
                buttonText={"Book An Elephant Moment"}
                isButton={true}
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

export default Experiance