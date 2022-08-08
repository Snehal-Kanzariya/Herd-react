import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/communityHero.png"
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import Projectzigzag1 from '../assets/Projectzigzag1.png'
import Projectzigzag2 from '../assets/Projectzigzag2.png'
import ContentGrid from '../components/ContentGrid'
import pGrid1 from '../assets/projectGrid1.png'
import pGrid2 from '../assets/projectsGrid2.png'
import Help from '../components/Help';
import News from '../components/News';

const CommuintyProjects = () => {
    const grid = [
        {
            image: pGrid1,
            title: 'Orphan Programme',
            description: "Our elephant orphan programme started with a baby elephant named Jabulani, the very first elephant we 'adopted' in 2002.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid2,
            title: 'Sustainability',
            description: "We aim to do everything we can to be sustainable, from how we feed our elephants, to protecting the land they live on.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="COMMUNITY PROJECTS"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="As a proudly South African organisation, we value our HERD community projects immensely. Without our local community, it would be impossible for us to operate successfully. The HERD Trust commits to being active within our local communities through education, awareness, and online communities. "
            />
            <Zigzag
                zigzagImg={Projectzigzag1}
                isPr={false}
                isReverse={true}
                title={"How HERD is Making a Local Impact"}
                paragraph={"As Mother Teresa so eloquently put it, “I alone cannot change the world, but I can cast a stone across the waters to create many ripples.” And at HERD, we firmly believe that every action has an impact, so we strive for that to be a lasting, positive impact. "}
                paragraph1={"Ultimately, we want to educate the world about the remarkable elephant species and the threats it faces. However, raising awareness about the essential conservation efforts undertaken by various organisations worldwide is a daily effort that begins with our local community."}
                buttonText={"Fundraise"}
                isButton={false}
                isPb={true}
                isParagraph1={true}
            />
            <Zigzag
                zigzagImg={Projectzigzag2}
                isPr={false}
                isReverse={false}
                title={"Employment Opportunities"}
                paragraph={"Along with education, employment is one of the most powerful forces. By offering employment to our local community, we not only help those individuals fulfil a bigger purpose but give them the ability to support their families. "}
                paragraph1={"But it does not stop by simply filling a role. At HERD, we believe in upskilling through offering various opportunities for training and growth. We seek to empower and educate local communities on our conservation objectives. This, in turn, benefits sustainable economic and social development locally. "}
                paragraph2={"With our team of community members as elephant carers, we work to achieve long-lasting success, as being a carer is a career that spans decades."}
                buttonText={"Meet Our Partners"}
                isButton={false}
                isPb={true}
                isParagraph1={true}
                isParagraph2={true}
            />
            <Zigzag
                zigzagImg={Projectzigzag1}
                isPr={false}
                isReverse={true}
                title={"Influencing Our Direct Community"}
                paragraph={"The Mpisi Primary School is located in our direct community, close to where our carers live. HERD’s relationship with the school aids in facilitating the role of our carers as leaders in their immediate society.  "}
                paragraph1={"For example, Khensani Ngobeni, our first female elephant carer, represents HERD by conducting environmental education programmes at Mpisi and building lasting relationships with the teachers, students and parents. "}
                paragraph2={"Partnerships with Conservation International and Scouts form the base for lesson planning. HERD believes in creating a community of environmental stewards who protect their natural surroundings by building relationships that empower the community. Our efforts improve lives and the future of South Africa’s natural capital and wildlife. "}
                buttonText={"Fundraise"}
                isButton={false}
                isPb={true}
                isParagraph1={true}
                isParagraph2={true}

            />
            <Zigzag
                zigzagImg={Projectzigzag2}
                isPr={false}
                isReverse={false}
                title={"The JabuLadies Project"}
                paragraph="The JabuLadies project empowers local women, increasing their household income and promoting gender equality through equal opportunities. "
                paragraph1="Miriam Mahladisa is a long-time employee and ambassador for this project. She makes a difference by training ladies in our Hoedspruit community to participate in various endeavours, such as embroidery and elephant dung paper making."
                isParagraph1={true}
                paragraph2="HERD then purchases handmade products from these ladies, markets and sells them. This sustainable business model benefits all parties involved, successfully uplifting our local community while also sharing their creative talents with the world."
                isParagraph2={true}
                buttonText={"Meet Our Partners"}
                isButton={false}
            />
            <div className="pt-149 pb-103">
                <h1 class="font-sans text-center pb-76 text-30 uppercase text-black-100">discover Other projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-50 gap-x-25 px-25 sm:px-50">
                    {grid.map(item => {
                        return <ContentGrid image={item.image} title={item.title} description={item.description} buttonTxt={item.buttonTxt} isButton={item.isButton} isMb={item.isMb} />
                    })}
                </div>
            </div>
            <Help
                mainTitle="Help Save Our Most Vulnerable Gentle Giants "
                mainParagraph="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support. "
                isBgGray={true}
            />
            <News
                mainTitle="Elephant Tales Blog"
                description="Want to hear the latest and greatest stories about what our elephants got up to? No two days are the same and they always entertain and delight us with their playful antics. From tear-jerkers to laugh-out-loud, follow us this way for all the latest stories of what’s happening at HERD."
            />
        </Layout>
    )
}

export default CommuintyProjects