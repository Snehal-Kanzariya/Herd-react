import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/locationHero.png"
import Content from '../components/Content'
import Zigzag from '../components/Zigzag'
import map from '../assets/map.png'
import Help from '../components/Help';
import News from '../components/News';


const Location = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="OUR Location & history"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Our baby elephant sanctuary in South Africa lies adjacent to the Jabulani Herd stables on the Kapama Private Game Reserve in Hoedspruit, Limpopo. "
                description1="The Jabulani Herd's unusual family structure, most of them orphans themselves, presents a unique solution for orphaned baby elephants in Southern Africa."
            />
            <Zigzag
                zigzagImg={map}
                isPr={false}
                isReverse={true}
                isPt136={true}
                title={"A Small Beginning"}
                paragraph={"In 1997, we discovered a four-month-old elephant calf named Jabulani abandoned and stuck in the mud. We rescued him from further injury and rehabilitated him successfully. Unfortunately, the wild elephants on the reserve continually rejected little Jabulani. Years later, in 2002, a herd of orphaned elephants in Zimbabwe were to be slaughtered due to the country’s turbulent land reformation process. As soon as we heard the news, we knew that we had to step in to save these magnificent creatures from a cruel end. "}
                paragraph1="Within days, the elephants were rescued and transported triumphantly across the border. Back then, a hand-picked team of elephant carers acted as the animals’ human counterparts on the journey. This team remains intact today, actively working alongside HERD on location at Jabulani. Tokwe, the Matriarch of the rescued herd, accepted the orphaned Jabulani as one of her own to our pleasure and surprise. Jabulani had finally found a family, and our rescued elephants formed a blended herd also named Jabulani."
                paragraph2="This unique family structure created the perfect environment for orphaned elephants needing a herd. Since then, our Jabulani herd has welcomed another three orphaned elephants to the family: Kumbura, Timisa and Khanyisa. We soon realised that the supervision and protection of our elephants and housing and income of our elephant carers is a growing but a costly necessity. This tremendous financial responsibility led to building a luxury lodge on the reserve in 2005."
                paragraph3="Later, in 2019, South Africa’s first dedicated elephant orphanage, named HERD (Hoedspruit Elephant Rehabilitation and Development), was established alongside the Jabulani herd homestead by Adine Roode, the owner and MD of Jabulani. Guests of the Jabulani Safari Lodge get to enjoy a uniquely African experience while also contributing to the operational costs of HERD. At Jabulani, guests become a part of the elephants’ redemptive journey, as they have the precious opportunity to witness the outcome of each one’s rehabilitation process."
                buttonText={"Our Story"}
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

export default Location