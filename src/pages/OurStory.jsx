import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/ourstoryHero.png"
import Content from '../components/Content'
import Zigzag from '../components/Zigzag'
import Fightingchance from '../assets/Fightingchance.png'
import difference from '../assets/difference.png'
import Help from '../components/Help';
import News from '../components/News';

const OurStory = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="our story"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The HERD (Hoedspruit Elephant Rehabilitation and Development) TRUST was established in 2021 following a 24-year journey in caring for elephants that have been displaced or orphaned due to human-elephant conflict."
            />
            <Zigzag
                zigzagImg={Fightingchance}
                isPr={false}
                isReverse={true}
                title={"Giving Orphaned Elephants a Fighting Chance"}
                paragraph={"The HERD Orphanage was built in 2019 in response to a growing number of young orphaned elephant calves that need a place of rehabilitation and more importantly, an existing herd that will accept them unconditionally. The Jabulani Herd is now a family of 16 elephants, of which 11 are orphans and five that were born to the herd over 10 years ago. In 2004 the lodge, Jabulani, was built to sustain the herd, with proceeds from tourism assisting with the care and management of the rescued herd. In 2021 a decision was made to move the Jabulani herd and the HERD Homestead operations (formally known as the Jabulani stables) together with the HERD Orphanage, under the umbrella of the HERD Trust which is a registered PBO Number 930072153. This allows for public funding to ensure the well-being of all the elephants. "}
                buttonText={"Meet The Herd"}
                isButton={true}
                isPb={true}
            />
            <Zigzag
                zigzagImg={difference}
                isPr={false}
                isReverse={false}
                title={"Making a Difference"}
                paragraph={"The HERD Trust also commits to being active within our local communities through education and awareness, as well as our online communities, bringing a global audience together to educate a larger audience about the elephant species and the essential conservation efforts undertaken by various organisations around the world."}
                buttonText={"Learn About Our Projects"}
                isButton={true}
                isPb={true}
            />
            <Zigzag
                zigzagImg={Fightingchance}
                isPr={false}
                isReverse={true}
                title={"Our “Human Herd”"}
                paragraph={"Our “Human Herd” forms an essential part of every orphaned elephant’s unique journey to recovery. This highly experienced team of dedicated, loyal elephant carers provides each baby elephant with the absolute best round-the-clock support."}
                buttonText={"Meet The Team"}
                isButton={true}

            />
            <Help
                mainTitle="Help Save Our Most Vulnerable Gentle Giants"
                mainParagraph="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support."
                isBgGray={true}
            />
            <News
                mainTitle="Elephant Tales Blog"
                description="Want to hear the latest and greatest stories about what our elephants got up to? No two days are the same and they always entertain and delight us with their playful antics. From tear-jerkers to laugh-out-loud, follow us this way for all the latest stories of what’s happening at HERD."
            />
        </Layout>
    )
}

export default OurStory