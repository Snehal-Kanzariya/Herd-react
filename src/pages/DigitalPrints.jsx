import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/digitalHero.png"
import Content from '../components/Content'
import Product from '../components/Product'
import digital1 from '../assets/digital1.png'
import digital2 from '../assets/digital2.png'
import digital3 from '../assets/digital3.png'
import digital4 from '../assets/digital4.png'
import News from '../components/News'

const DigitalPrints = () => {
    const products = [
        {
            id: 1,
            image: digital1,
            SubTitle: 'Digital Prints',
            title: 'Khanyisa Bottle with Herman',
        },
        {
            id: 2,
            image: digital2,
            subTitle: 'Digital Prints',
            title: 'Elephant eye',
        },
        {
            id: 3,
            image: digital3,
            subTitle: 'Digital Prints',
            title: 'Lion in the dark',
        },
        {
            id: 4,
            image: digital4,
            subTitle: 'Digital Prints',
            title: 'Khanyisa and Bubi June 2020',
        },
        {
            id: 5,
            image: digital1,
            SubTitle: 'Digital Prints',
            title: 'Khanyisa Bottle with Herman',
        },
        {
            id: 6,
            image: digital2,
            subTitle: 'Digital Prints',
            title: 'Elephant eye',
        },
        {
            id: 7,
            image: digital3,
            subTitle: 'Digital Prints',
            title: 'Lion in the dark',
        },
        {
            id: 8,
            image: digital4,
            subTitle: 'Digital Prints',
            title: 'Khanyisa and Bubi June 2020',
        },
        {
            id: 9,
            image: digital1,
            SubTitle: 'Digital Prints',
            title: 'Khanyisa Bottle with Herman',
        },
        {
            id: 10,
            image: digital2,
            subTitle: 'Digital Prints',
            title: 'Elephant eye',
        },
        {
            id: 11,
            image: digital3,
            subTitle: 'Digital Prints',
            title: 'Lion in the dark',
        },
        {
            id: 12,
            image: digital4,
            subTitle: 'Digital Prints',
            title: 'Khanyisa and Bubi June 2020',
        },
    ]

    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"HERD Shop"}
                heroTitle="Digital prints"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="You can support HERD by purchasing one of our high res images from our HERD Digital Print Shop! Some of our photographs are kindly donated by supporters to help us raise funds, we mention their names, and at checkout, you will find a link to their websites where applicable. Keep checking this page for new photo uploads."
            />


            <div className="bg-gray-100 pb-150">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-25 mx-25 sm:mx-49">
                    {
                        products.map(item => {
                            return <Product image={item.image} subTitle={item.subTitle} title={item.title} />
                        })
                    }
                </div>
                <button
                    className="flex justify-center my-0 mx-auto mt-100 px-5 py-2 text-15 font-sans bg-transparent text-black-100 border border-black-100 border-opacity-40 hover:bg-black-100 hover:text-white hover:border-transparent rounded">
                    Load More
                </button>
            </div>

            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default DigitalPrints