import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/HelpHero.png";
import Content from '../components/Content';
import News from '../components/News';
import raisefund from '../assets/raisefund.png'
import Zigzag from '../components/Zigzag';

const HelpHerd = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Help the Herd"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support."
            />
            <Zigzag
                zigzagImg={raisefund}
                isPr={false}
                isReverse={false}
                title={"Leave a legacy with HERD"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo"}
                buttonText={"Leave A Legacy"}
                isButton={true}
                isPb={true}

            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default HelpHerd