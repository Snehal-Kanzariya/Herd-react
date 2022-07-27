import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/MeetTheHerdHero.png";
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import unique from '../assets/unique.png'
import Help from '../components/Help';
import News from '../components/News';
import raisefund from '../assets/raisefund.png'
import Image1 from '../assets/timisatabgrid.png'
import Image2 from '../assets/tabgridKhanyisa.png'
import Image3 from '../assets/tabgridKumbura.png'
import ImageGrid from '../components/ImageGrid'


const MeetHerd = () => {
    // grid data
    const gridList = [
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
    ]
    console.log(gridList)
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="meet the herd"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Zigzag
                zigzagImg={unique}
                isPr={false}
                isReverse={true}
                title={"Why the Herd is unique"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Amet dictum sit ameut"}
                buttonText={"Meet Our Partners"}
                isButton={false}
                isPb={true}
            />
            <Zigzag
                zigzagImg={raisefund}
                isPr={false}
                isReverse={false}
                title={"Reintergration"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut viverra ipsum."}
                buttonText={"Fundraise"}
                isButton={false}
                isPb={true}

            />

            <div className="py-150">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-25 px-25 sm:px-50">
                    {gridList.map(item => {
                        return <ImageGrid image={item.image} title={item.title} subTitle={item.subTitle} buttonText1={item.buttonText1} buttonText2={item.buttonText2} />
                    })}
                </div>
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

export default MeetHerd