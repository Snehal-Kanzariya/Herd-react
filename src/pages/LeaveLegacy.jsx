import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/LegacyHero.png";
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import Legacyzigzag1 from '../assets/Legacyzigzag1.png'
import Legacyzigzag2 from '../assets/Legacyzigzag2.png'
import Help from '../components/Help';
import News from '../components/News';

const LeaveLegacy = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Help The Herd"}
                heroTitle="LEAVE A LEGACY"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Leave something behind, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Zigzag
                zigzagImg={Legacyzigzag1}
                isPr={false}
                isReverse={true}
                title={"Leave something behind"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Amet dictum sit ameut"}
                buttonText={"Meet Our Partners"}
                isButton={false}
                isPb={true}
            />
            <Zigzag
                zigzagImg={Legacyzigzag2}
                isPr={false}
                isReverse={false}
                title={"Remember HERD in your Will"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, "}
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

export default LeaveLegacy  