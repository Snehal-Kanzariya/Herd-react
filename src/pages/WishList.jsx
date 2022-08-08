import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/WishlistHero.png";
import Content from '../components/Content';
import News from '../components/News';
import Product from '../components/Product'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'


const WishList = () => {
    const products = [
        {
            id: 1,
            image: Product1,
            subTitle: 'Wishlist',
            title: 'Buscopan (10 Tablets',
        },
        {
            id: 2,
            image: Product2,
            subTitle: 'Wishlist',
            title: 'Essentiale extreme 100 capsules',
        },
        {
            id: 3,
            image: Product3,
            subTitle: 'Wishlist',
            title: 'Baby Bum cream',
        },
        {
            id: 4,
            image: Product4,
            subTitle: 'Wishlist',
            title: 'Hand Blender (Philips 550W)',
        },
        {
            id: 5,
            image: Product1,
            subTitle: 'Wishlist',
            title: 'Buscopan (10 Tablets',
        },
        {
            id: 6,
            image: Product2,
            subTitle: 'Wishlist',
            title: 'Essentiale extreme 100 capsules',
        },
        {
            id: 7,
            image: Product3,
            subTitle: 'Wishlist',
            title: 'Baby Bum cream',
        },
        {
            id: 8,
            image: Product4,
            subTitle: 'Wishlist',
            title: 'Hand Blender (Philips 550W)',
        },
        {
            id: 9,
            image: Product1,
            subTitle: 'Wishlist',
            title: 'Buscopan (10 Tablets',
        },
        {
            id: 10,
            image: Product2,
            subTitle: 'Wishlist',
            title: 'Essentiale extreme 100 capsules',
        },
        {
            id: 11,
            image: Product3,
            subTitle: 'Wishlist',
            title: 'Baby Bum cream',
        },
        {
            id: 12,
            image: Product4,
            subTitle: 'Wishlist',
            title: 'Hand Blender (Philips 550W)',
        },

    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Help The Herd"}
                heroTitle="Our wishlist"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Thank you for donating towards our HERD wishlist items.
                PLEASE NOTE: that transactions on this page are received as DONATIONS towards the product purchase for use at HERD. 
                The actual products are not for sale."
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

export default WishList
