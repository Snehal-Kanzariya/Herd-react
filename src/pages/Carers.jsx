import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/carerHero.png"
import Content from '../components/Content'
import Zigzag from '../components/Zigzag'
import getup from '../assets/getup.png'
import relationship from '../assets/relationship.png'
import Help from '../components/Help';
import News from '../components/News';

const Carers = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Meet The Team"}
                heroTitle="The carers"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Zigzag
                zigzagImg={getup}
                isPr={false}
                isReverse={true}
                isPt136={true}
                title={"What they get up to"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, "}
                buttonText={"Our Story"}
                isButton={false}
            />
            <Zigzag
                zigzagImg={relationship}
                isPr={false}
                isReverse={false}
                title={"Relationship with elephants "}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, "}
                buttonText={"Fundraise"}
                isButton={false}

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

export default Carers
