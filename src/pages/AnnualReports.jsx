import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/AnnualHero.png";
import Content from '../components/Content';
import Help from '../components/Help';
import News from '../components/News';

const AnnualReports = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Annual Reports"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The first official HERD Trust annual report will be published after the financial year-end inSouth Africa is completed, which is February 2021."
                description1="Before the HERD Trust was registered in June 2021, all funding and projects for Hoedspruit Elephant Rehabilitation and Development (HERD) was administered by The Wildlife Conservation Trust (WCT). The WCT 2020 annual report which incorporated HERD’s financials can be seen in their report ended February 2020."
            />
            <Help
                mainTitle="Help Save Our Most Vulnerable Gentle Giants"
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

export default AnnualReports
