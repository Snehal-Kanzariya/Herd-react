import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/HerdBlogHero.png";
import Help from '../components/Help';

const HerdBlog = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="HeRD BLOG"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Help
                mainTitle="Help Save Our Most Vulnerable Gentle Giants"
                mainParagraph="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support. "
                isBgGray={true}
            />
        </Layout>
    )
}

export default HerdBlog
