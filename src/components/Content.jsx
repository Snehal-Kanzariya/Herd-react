import React from 'react'
import contentImg from "../assets/content.svg";

const Content = ({ description, description1 }) => {
    return (
        <section class="description bg-gray-100 smallest:py-50 sm:py-100">
            <div class="content-bg smallest:mx-12 sm:mx-24 pt-52 pb-76">
                <img src={contentImg} alt="" class="mx-auto mb-5" />
                <p class="content smallest:mx-11 smallest:text-15 sm:text-22 sm:mx-89 justify-center flex">
                    {description}
                </p>
                <p class="pt-3 content smallest:mx-11 smallest:text-15 sm:text-22 sm:mx-89 justify-center flex">
                    {description1}
                </p>
            </div>
        </section>
    )
}

export default Content  