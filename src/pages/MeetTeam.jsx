import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/meetTeamHero.png"
import Content from '../components/Content'
import Zigzag from '../components/Zigzag'
import carers from '../assets/carers.png'
import opsTeam from '../assets/opsTeam.png'
import Help from '../components/Help';
import News from '../components/News';

const MeetTeam = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle="Our Story"
                heroTitle="Meet the team"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Zigzag
                zigzagImg={carers}
                isPr={false}
                isReverse={true}
                title={"Meet the carers"}
                paragraph={"TDiam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim."}
                buttonText={"Meet Them"}
                isButton={true}
                isPb={true}
            />
            <Zigzag
                zigzagImg={opsTeam}
                isPr={false}
                isReverse={false}
                title={"Meet the ops team"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec."}
                buttonText={"Meet Them"}
                isButton={true}
                isPb={true}
            />
            <Zigzag
                zigzagImg={carers}
                isPr={false}
                isReverse={true}
                title={"Meet the trustees & advisors"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec ."}
                buttonText={"Meet Them"}
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

export default MeetTeam
