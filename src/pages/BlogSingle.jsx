import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/BlogHero.png";
import Zigzag from '../components/Zigzag';
import blogzigzag1 from '../assets/blogzigzag1.png'
import blogzigzag2 from '../assets/blogzigzag2.png'
import newfriend from '../assets/newfriend.png'
import Help from '../components/Help';

const BlogSingle = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"The Herd"}
                heroTitle="Lammie The Legendary sheep’s 
                journey of the years"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <div className="conversation px-50 lg:px-165 pt-20 sm:pt-142">
                <div className="container">
                    <div className="font-sans text-22 text-gray-300 tracking-wider leading-7">
                        <p>“We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.</p>
                        <p>“Even longer,” Pooh answered.</p>
                        <p className="pt-3 pb-5">~ A.A. Milne</p>
                    </div>
                    <p className="max-w-[916px] font-sans text-gray-200 text-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi tristique. Porta nibh venenatis
                        cras sed felis. A cras semper auctor neque. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                        Nullam non nisi est sit. Volutpat odio facilisis mauris sit amet massa vitae tortor. Nibh tortor id
                        aliquet lectus proin nibh nisl. Sed elementum tempus egestas sed sed risus pretium quam vulputate.
                        Parturient montes nascetur ridiculus mus mauris vitae. Et magnis dis parturient montes nascetur
                        ridiculus mus. Ornare massa eget egestas purus viverra. Egestas congue quisque egestas diam in arcu
                        cursus euismod quis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Donec
                        ultrices tincidunt arcu non. Nulla facilisi morbi tempus iaculis urna id.
                    </p>
                </div>

            </div>
            <Zigzag
                zigzagImg={blogzigzag1}
                isPr={false}
                isReverse={false}
                paragraph={"The title of ‘legend’ isn’t one that’s handed out without careful consideration. If you ask us, no sheep could be more deserving of legend status than kind and compassionate Lammie."}
                isParagraph1={true}
                paragraph1={"A sense of belonging and companionship is known to greatly enhance the wellbeing of any living creature, particularly emotionally complex elephant calves. Lammie, HERD’s resident companion sheep, has been a hero in providing this love and support to the calves at HERD, taking her role of devoted surrogate mother very seriously."}
                isButton={false}
                isPb={true}
            />
            <Zigzag
                zigzagImg={blogzigzag2}
                isPr={false}
                isReverse={true}
                paragraph={"The History of Lammie"}
                paragraph1={"Lammie was born in 2014 and soon became an “animal mom” to numerous orphaned rhinos and a few elephants too."}
                paragraph2={"This unique sheep quickly became a worldwide phenomenon as people fell in love with the incredible bond between her and her first adopted child, Gertjie, an orphaned rhino at the HESC rehabilitation facility, staying by the little animal’s side continuously."}
                isButton={false}
                isPb={false}
                isParagraph1={true}
                isParagraph2={true}
            />

            <section className="yt-video px-25 sm:px-50">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe className="w-full" height="684px" src="https://www.youtube.com/embed/2XEh1KwhfFY?controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </section>

            <Zigzag
                zigzagImg={newfriend}
                isPr={false}
                isReverse={true}
                paragraph={"A New Friend in Nungu"}
                paragraph1={"With Khanyisa now spending her days out in the wilderness with her herd, Lammie was in need of a friend of her own! Thankfully, fellow companion sheep Nungu was up for the job."}
                paragraph2={"Nungu joined HERD in March 2021 for a well-deserved retirement after filling the role of companion sheep and surrogate mother to a number of orphaned wildlife for many years."}
                isButton={false}
                isParagraph1={true}
                isParagraph2={true}
            />
            <Help
                mainTitle="How you can help"
                mainParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                isBgGray={true}
            />
        </Layout>
    )
}

export default BlogSingle
