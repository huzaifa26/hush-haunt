import Crousal from '../components/EventDescriptions/Crousal'
import EventsCards from '../components/Events/EventsCards'
import Footer from '../components/Footer'
import Button from '../components/General/Button'
import SearchBar from '../components/General/SearchBar'
import { Link } from "react-router-dom"

type Props = {}

const data = [
    {
        image: "./image1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
]

const data1 = [
    [{
        image: "./festival1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./electronic1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./pop1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./music1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./comedy1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./miami1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
]

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
};

let crousalData = [
    {
        id: "1",
        image: "./EventCrousal1.png",
    },
    {
        id: "2",
        image: "./EventCrousal2.png",
    },
    {
        id: "3",
        //   image: "./EventCrousal1.png",
        image: "./EventCrousal1 copy.png",
    },
]

export default function Events({ }: Props) {
    return (
        <div className='w-[calc(100vw - 100%)]'>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    <img className='ml-[8px]' src='./Logo.png' alt='' />
                    <SearchBar />
                </div>

                <ul className='text-[#493c3c] text-[16px] font-[700] flex gap-[5.244vw] mr-[7.37vw]'>
                    <li>Events</li>
                    <li>Live Stream</li>
                    <li>Help</li>
                    <Link to="/login">
                        <li>Log In</li>
                    </Link>
                    <Link to="/signup">
                        <li className='text-[#FB4A04]'>Sign Up</li>
                    </Link>
                </ul>
            </nav>

            <section className='eventsMainBackground h-[778px] w-[100%] flex relative'>
                <div className='flex flex-col justify-center absolute top-[39%] left-[65%]'>
                    <h1 className="mb-[23px] eventTextFont w-[476px] font-[400] text-[96px] leading-[113px] text-[#ffffff]">NOW <span className='eventTextFont text-[64px]'>IS YOUR</span> TIME</h1>
                    <Button width={"17.75vw"} height={"61px"} text={"Find your next Event"} />
                </div>
            </section>

            <div className='bg-white relative top-[-28px] p-[14px] eventDivBoxShadow w-[85.76368876080691vw] h-[118px] m-auto'>
                <div className='pt-[5px] pb-[18px] pl-[10px] border-l-[2px] border-[#FB4A04]'>
                    <h2 className='mb-[8px] font-[700] text-[24px] leading-[40px] text-[#473a3a]'>Do events help you find connection?</h2>
                    <p className='font-[400] text-[16px] w-[100%] leading-[26px] text-[#473a3a]'>Help us understand how attending events contributes to building social connection by taking a short survey before and after your next event.</p>
                </div>
            </div>

            <section>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="font-[700] text-[36px] leading-[58.64px] text-[#473a3a]">Check out trending categories</h2>
                    <hr className='mt-[23px] w-[232px] !h-[2px] border-[#FB4A04] !p-0'></hr>
                </div>
            </section>

            <section className='w-[100%] mt-[160px]'>
                <EventsCards mainText='Halloween' data={data} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Festivals' data={data1[0]} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Electronic' data={data1[1]} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Pop Culture' data={data1[2]} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Music Venues' data={data1[3]} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Music Venues' data={data1[4]} />
            </section>

            <section className='w-[100%] mt-[93px]'>
                <EventsCards mainText='Miami' data={data1[5]} />
            </section>

            <section className='mb-[216px]'>
                <div className='mb-[45px] mt-[60px]     w-[86.1671469740634vw] m-auto'>
                    <h2 className='font-[700] text-[36px] leading-[58.64px] text-[#473a3a]'>Other Categories</h2>
                </div>
                <div className='overflow-hidden'>
                    <Crousal maxWidth={'728px'} width={"41.95965417867435vw"} settings={settings} crousalData={crousalData} />
                </div>
                <div className='w-[86.1671469740634vw] m-auto'>
                    <hr className='mt-[23px] w-[119px] !h-[2px] border-[#FB4A04] !p-0'></hr>
                </div>
            </section>

            <Footer />
        </div>
    )
}