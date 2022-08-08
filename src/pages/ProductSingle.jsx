import React from 'react'
import Layout from '../components/Layout'
import Product from '../components/Product'
import digital1 from '../assets/jgal1.png'
import digital2 from '../assets/digital2.png'
import digital3 from '../assets/digital3.png'
import digital4 from '../assets/digital4.png'
import productsingle from '../assets/productsingle.png'
import right from '../assets/right.svg'
import rightArrow from '../assets/arrow_right.svg'
import News from '../components/News'
import { Link } from 'react-router-dom'

const ProductSingle = () => {
    const products = [
        {
            id: 1,
            image: digital1,
            subTitle: 'Digital Prints',
            title: 'Foraging Kudu',
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
    ]

    return (
        <Layout>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 px-50">
                    <div>
                        <img src={productsingle} alt="" className="sm:w-full" />
                    </div>
                    <div className="pl-112 flow-root">
                        <button className="flex mt-100 text-12 float-right font-sans pb-14 items-end ml-15 bg-black text-[#FCFBF6] rounded-l-lg pr-30 midscreen:text-14 font-normal">
                            <img src={right} alt="" className="pr-11 pl-20 pt-[14px]" />
                            Item Added to Cart
                        </button>
                        <div className=" lg:pr-123 maxscreen:pr-147 pt-152">
                            <h6 className="text-gray-200 text-12 font-normal tracking-wider">Digital Prints</h6>
                            <h1 className="title text-26 leading-8 tracking-wider">Khanyisa Bottle with Herman</h1>
                            <p className="text-22 text-gray-200 font-normal leading-4 tracking-wider pt-2 pb-21">R 159.60</p>
                            <div className="text-gray-200 text-12 leading-[19px] tracking-wider font-normal">
                                <p className="py-2">Tax incled. Shipping calculated at checkout </p>
                                <p className="py-2">Photo by Marion Volborn
                                    Image size: 12MB
                                    All proceeds will go towards HERD Trust.</p>
                                <p className="py-2">We appreciate your support in purchasing a digital print.</p>
                            </div>
                            <div className="flex pt-5">
                                <div className="text-center bg-gray-100 px-25 pt-2 pb-[11px]">
                                    1
                                </div>
                                <button className="ml-15 btn-green rounded p-2 midscreen:text-14 text-13 font-medium">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="my-0 mx-auto pt-19 pb-102 flex">
                    <Link to='/DigitalPrints' className="flex border-b border-[#00000066] mb-2">
                        <img src={rightArrow} alt="" className="flex pl-9 rotate-180" />
                        <span className="mr-10 mb-2 font-sans text-16">Back To Digital Prints</span>
                    </Link>
                </button>
            </section>

            <div className="bg-gray-100 pb-150">
                <div className="product-main-title">
                    <h1 className="font-sans text-30 text-black-100 font-normal tracking-wider leading-38 text-center uppercase pb-65 pt-118">
                        Other items you might like</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-25 mx-25 sm:mx-49">
                    {
                        products.map(item => {
                            return <Product image={item.image} subTitle={item.subTitle} title={item.title} />
                        })
                    }
                </div>
            </div>
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default ProductSingle
