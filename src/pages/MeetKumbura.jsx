import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/meetKumburaHero.png";
import ImageGrid from '../components/ImageGrid'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import Image1 from '../assets/timisatabgrid.png'
import Image2 from '../assets/tabgridKhanyisa.png'
import Image3 from '../assets/tabgridKumbura.png'
import rightArrow from '../assets/arrow_right.svg'
import Help from '../components/Help';
import News from '../components/News';

const MeetKumbura = () => {
    const blog = [
        {
            image: blog1,
        },
        {
            image: blog2,
        },
    ]

    const orphans = [
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
        {
            image: Image2,
            title: "Khanyisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
        {
            image: Image3,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
    ]

    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle="Foster An Elephant"
                heroTitle="meet Kumbura"
                isButton={false}
                isBottom={false}
                greemButton={"Foster Kumbura"}
            />

            {/* Blogs Featuring Kumbura */}
            <div className="pt-113">
                <h1 className="pb-51 title text-black-100 text-30 ml-55 uppercase">Blogs Featuring Kumbura</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-25 px-25 sm:px-50">
                    {blog.map(item => {
                        return <ImageGrid image={item.image} />
                    })}
                </div>
            </div>



            {/* View other Orphans */}
            <div className="pt-208 pb-150">
                <h1 className="title text-30 text-black-100 uppercase text-center pb-48">View other Orphans</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-25 px-25 sm:px-50">
                    {orphans.map(item => {
                        return <ImageGrid image={item.image} title={item.title} subTitle={item.subTitle} buttonText1={item.buttonText1} buttonText2={item.buttonText2} />
                    })}
                </div>
                <button className="flex justify-center mx-auto mb-0 mt-99">
                    <div className="flex border-b border-[#00000066]">
                        <span className="pr-3 mb-2 font-sans text-16">View All Elephants</span>
                        <img src={rightArrow} alt="" className="flex " />
                    </div>
                </button>
            </div>

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

export default MeetKumbura