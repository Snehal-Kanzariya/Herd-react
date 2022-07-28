import React, { useState } from 'react'
import Layout from '../components/Layout'
import heroImage from "../assets/FosterHero.png";
import SectionHero from '../components/SectionHero';
import Content from '../components/Content';
import News from '../components/News';
import Help from '../components/Help';
import Image1 from '../assets/timisatabgrid.png'
import Image2 from '../assets/tabgridKhanyisa.png'
import Image3 from '../assets/tabgridKumbura.png'
import ImageGrid from '../components/ImageGrid';


const Foster = () => {
    const all = [
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Orphans',
        },
        {
            image: Image2,
            title: "Khanyisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Elephants',
        },
        {
            image: Image3,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Sheep',
        },
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Orphans',
        },
        {
            image: Image2,
            title: "Khanyisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Elephants',
        },
        {
            image: Image3,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Sheep',
        },
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Orphans',
        },
        {
            image: Image2,
            title: "Khanyisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Elephants',
        },
        {
            image: Image3,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster',
            category: 'Sheep',
        },

    ]

    const [tabItem, setTabItem] = useState(all);

    const onChangeTab = (type) => {
        let result = all.filter((item =>
            item.category === type
        ));

        if (result.length === 0) {
            result = all;
        }
        setTabItem(result);

        // if (type === "Sheep") {
        //     const sheepItems = all.filter((item =>
        //         item.category === "Sheep"
        //     ));
        //     setTabItem(sheepItems);
        // } else if (type === "Elephants") {
        //     const elItems = all.filter((item =>
        //         item.category === "Elephants"
        //     ));
        //     setTabItem(elItems);
        // } else if (type === "Orhans") {
        //     const orhansItems = all.filter((item =>
        //         item.category === "Orhans"
        //     ));
        //     setTabItem(orhansItems);
        // } else {
        //     setTabItem(all);
        // }
    }


    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Foster an Elephant"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />

            <div className="py-150">
                <div className="title text-black-100 text-30 uppercase pl-50 pb-31">
                    <h1>The jabulani herd</h1>
                </div>
                <ul className="ml-55 nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-100" id="tabs-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
        hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-all-tab"
                            data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                            aria-selected="true"
                            onClick={() => onChangeTab("all")}>All</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                            id="tabs-orphans-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                            aria-controls="tabs-profile" aria-selected="false" onClick={() => onChangeTab("Orphans")}>Orphans</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                            id="tabs-elephants-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                            aria-controls="tabs-profile" aria-selected="false" onClick={() => onChangeTab("Elephants")}>Elephants</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                            id="tabs-sheep-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                            aria-controls="tabs-profile" aria-selected="false" onClick={() => onChangeTab("Sheep")}>Sheep</a>
                    </li>
                </ul>
                <div class="tab-content" id="tabs-tabContent">
                    <div class="tab-pane fade show active" id="tabs-all" role="tabpanel" aria-labelledby="tabs-all-tab">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-25 px-25 sm:px-50">
                            {tabItem.map(item => {
                                return <ImageGrid image={item.image} title={item.title} subTitle={item.subTitle} buttonText1={item.buttonText1} buttonText2={item.buttonText2} />
                            })}
                        </div>
                    </div>
                </div>
                <button
                    className="justify-center flex mx-auto mb-0 mt-100 p-2 nav items-center text-16 bg-transparent text-black-100 px-5 border border-black-100 border-opacity-40 hover:bg-black-100 hover:text-white hover:border-transparent rounded">
                    Load More
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

export default Foster
