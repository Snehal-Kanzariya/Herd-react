import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from '../assets/homeHero.png'
import descriptionIcon from '../assets/elephant.svg'
import videoImage from '../assets/elephantvideoimg.png'
import playIcon from '../assets/play.svg'
import Help from '../components/Help'
import Zigzag from '../components/Zigzag'
import SAelephant from '../assets/SAelephant.png'
import raisefund from '../assets/raisefund.png'
import donation_partners from '../assets/donation_partners.png'
import News from '../components/News'
import Team from '../assets/team.png'



const Home = () => {
    return (
        <Layout>
            {/* hero */}
            <SectionHero
                heroImage={heroImage}
                heroTitle="a unique herd with a unique story"
                isButton={true}
                isBottom={true}
                isGreenButton={false}
            />
            {/* description */}
            <div className="description pt-117">
                <div className="xs:container xs:px-8 lg:!px-73">
                    <img src={descriptionIcon} alt="" className="mx-auto" />
                    <p className="py-37 font-sans font-normal xs:text-lg lg:!text-28 lg:!leading-35 text-center tracking-wider text-gray-300">
                        Every elephant needs a herd. As a species, their strong family bonds and delicate social
                        dynamics are integral to their wellbeing and survival. Because of this, orphaned elephant calves
                        have a slim chance of survival in the wild. HERD’s South African elephant orphanage gives them a fighting chance
                        by stepping in as their family and protectors when they need it most. Until they’re ready to join
                        their new herd, you help us give them a second chance at life...
                    </p>
                </div>
            </div>
            {/* play yt video  */}
            <section className="video-banner pt-37 pb-106">
                <div className="container">
                    <div className="relative justify-center flex">
                        <div className="ratio-16">
                            <img src={videoImage} alt="" className="" />
                        </div>
                        <div className="absolute xs:top-51 sm:!top-214">
                            <div className="flex justify-center">
                                <img src={playIcon} alt="" />
                            </div>
                            <div className="pt-11">
                                <h3 className="font-sans text-base leading-5 text-white text-center tracking-wider">
                                    Watch Video
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="circlebox pb-73">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-74 xl:px-87">
                        <div className="circle relative justify-center flex mx-auto my-0">
                            <div className="absolute">
                                <span
                                    className="justify-center flex font-sans text-70 text-green text-center pt-10">16</span>
                                <p
                                    className="font-sans text-gray-300 text-17 max-w-180 justify-center flex text-center my-0 mx-auto px-2">
                                    Number of elephants in the Herd
                                </p>
                            </div>
                        </div>
                        <div className="circle relative justify-center flex mx-auto my-0">
                            <div className="absolute">
                                <span
                                    className="justify-center flex font-sans text-70 text-green text-center pt-10">20</span>
                                <p
                                    className="font-sans text-gray-300 text-17 max-w-180 justify-center flex text-center my-0 mx-auto px-2">
                                    Jobs created through
                                    the orphange
                                </p>
                            </div>
                        </div>
                        <div className="circle relative justify-center flex mx-auto my-0">
                            <div className="absolute">
                                <span
                                    className="justify-center flex font-sans text-70 text-green text-center pt-10">3</span>
                                <p
                                    className="font-sans text-gray-300 text-17 max-w-180 justify-center flex text-center my-0 mx-auto px-2">
                                    Orphans intergrated
                                    into the Herd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Help
                mainTitle="Help Save Our Most Vulnerable Gentle Giants"
                mainParagraph="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support. "
                isBgGray={false}
            />
            <Zigzag
                zigzagImg={SAelephant}
                isPr={false}
                isReverse={true}
                isPt136={true}
                title={"South Africa’s Plea for an Elephant Orphanage"}
                paragraph={"HERD is the First Dedicated South African Elephant Orphanage. The unfortunate truth is that there are an ever-increasing number of orphaned and displaced elephant calves in South Africa. This is linked to the rising poaching numbers, taking mothers away from their calves before they can fend for themselves in the wild. And that’s where HERD comes in, acting as their unique adoptive family to help raise them in a safe environment. "}
                buttonText={"Our Story"}
                isButton={true}
            />
            <Zigzag
                zigzagImg={raisefund}
                isPr={false}
                isReverse={false}
                title={"Raise Funds for HERD"}
                paragraph={"Be a champion to our elephants by hosting a third-party fundraising event to aid our HERD Trust. Giving your time and resources to help spread the word about our elephant orphans means the world to us, and more importantly, to their survival. The funds you raise will directly go to our initiatives and make the world’s difference."}
                buttonText={"Fundraise"}
                isButton={true}

            />
            <Zigzag
                zigzagImg={donation_partners}
                isPr={false}
                isReverse={true}
                title={"Donation Partners"}
                paragraph={"You can support HERD by purchasing items from our various retail partners or become one of our donation partners by setting up a monthly contribution to support our orphaned elephants."}
                buttonText={"Meet Our Partners"}
                isButton={true}
            />
            <section className="pb-158">
                <div className="relative">
                    <img src={Team} alt="" />
                    <div className="absolute bottom-15 sm:bottom-75 xs:pl-3 md:!pl-148">
                        <h1 className="title text-xl sm:text-35 text-white uppercase">
                            Meet the Team
                        </h1>
                        <p className="py-2 sm:py-17 font-sans text-8 sm:text-15 sm:leading-19 tracking-wider text-white max-w-493 mt-17">Our carers are the real behind-the-scenes superheroes.
                            It’s not a job to them, but a calling, and
                            they step in as our elephants’ “human herd” to help them, from the initial rescue operation, to
                            feeding and monitoring them, as well as stepping in swiftly when they’re in need. Our carers
                            lovingly nurture and protect our elephants around the clock to ensure their wellbeing.
                        </p>
                        <button
                            className="xs:text-10 sm:text-15 font-sans py-1 bg-transparent text-white px-5 border border-white hover:bg-white hover:text-black hover:border-transparent rounded">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <News
                mainTitle="Elephant Tales Blog"
                description="Want to hear the latest and greatest stories about what our elephants got up to? No two days are the same and they always entertain and delight us with their playful antics. From tear-jerkers to laugh-out-loud, follow us this way for all the latest stories of what’s happening at HERD."
            />
        </Layout>
    )
}

export default Home
