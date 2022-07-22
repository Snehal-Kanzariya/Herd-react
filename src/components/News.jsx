import React from 'react'
import grid1 from '../assets/Herdgrid.png';
import grid2 from '../assets/communitygrid.png';
import grid3 from '../assets/Orphanagegrid.png';

const News = ({ mainTitle, description }) => {
    return (
        <section class="pt-144 pb-150">
            <div class="grid-upper">
                <div class="flex justify-center grid-title text-30 text-black-100 uppercase title">
                    <h2 class="text-gray-500 text-center">{mainTitle}</h2>
                </div>
                <div class=" grid-content">
                    <p class="pb-50 pt-5 font-sans font-normal text-15 max-w-662 text-center mx-auto my-0 text-gray-200 xs:px-5 sm:px-0">
                        {description}
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 xs:px-25 md:!px-50">
                <div>
                    <img src={grid1} alt="" class="xs:w-full" />
                    <div class="subtitle font-sans text-13 tracking-tighter text-gray-200 leading-4 pt-23 pb-9">
                        The Herd
                    </div>
                    <div class="title text-22 font-normal max-w-366 leading-7">
                        Tiny Tusker Timisa’s Five Year Journey with the Jabulani Herd
                    </div>
                </div>
                <div>
                    <img src={grid2} alt="" class="xs:w-full" />
                    <div class="subtitle font-sans text-13 tracking-tighter text-gray-200 leading-4 pt-23 pb-9">
                        Community
                    </div>
                    <div class="title text-22 font-normal max-w-366 leading-7">
                        Empowerment, embroidery & elephants – Meet the Jabuladies!
                    </div>
                </div>
                <div>
                    <img src={grid3} alt="" class="xs:w-full" />
                    <div class="subtitle font-sans text-13 tracking-tighter text-gray-200 leading-4 pt-23 pb-9">
                        The Orphanage
                    </div>
                    <div class="title text-22 font-normal max-w-366 leading-7">
                        Lammie the legendary sheep’s journey over the years
                    </div>
                </div>
            </div>
            <button
                class="p-2 font-sans mt-82 flex justify-center my-0 mx-auto bg-transparent text-black-100 px-5 border border-gray-600 hover:bg-black-100 hover:text-white hover:border-transparent rounded">
                Discover Our Blog
            </button>
        </section>
    )
}

export default News