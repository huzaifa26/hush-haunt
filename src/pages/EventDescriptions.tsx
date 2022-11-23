import React from 'react'
import TicketCard from '../components/EventDescriptions/TicketCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crousal from '../components/EventDescriptions/Crousal';
import ContactBar from '../components/EventDescriptions/ContactBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom"
import LazyImage from '../components/General/LazyImage';
import { motion } from "framer-motion"


type Props = {}

let ticketData = [
  {
    id: "1",
    image: './ticket1.png',
    text: 'First 100 member',
    price: 'Free',
    priceDescription: null,
    icon: './add.png',
  },
  {
    id: "2",
    image: './ticket2.png',
    text: 'Immediate Admission',
    price: '$41.99',
    priceDescription: null,
    icon: './add.png',
  },
  {
    id: "3",
    image: './ticket3.png',
    text: 'Fast Pass Admission',
    price: '$31.99',
    priceDescription: null,
    icon: './add.png',
  },
  {
    id: "4",
    image: './ticket4.png',
    text: 'Stream Live',
    price: 'Free',
    priceDescription: "Stream Live",
    icon: './add.png',
  }
]

let crousalData = [
  {
    id: "1",
    image: "./Gallery1.png",
  },
  {
    id: "2",
    image: "./Gallery2.png",
  },
  {
    id: "3",
    image: "./Gallery3.png",
  },
  {
    id: "4",
    image: "./Gallery1.png",
  },
  {
    id: "5",
    image: "./Gallery2.png",
  },
  {
    id: "6",
    image: "./Gallery3.png",
  },
]

const contactData = [
  {
    id: "1",
    heading: "Email",
    text: "partymode@mail.com"
  },
  {
    id: "2",
    heading: "xxx-xxx-xxxxxx",
    text: "partymode@mail.com"
  },
  {
    id: "3",
    heading: "Website",
    text: "www.partymode.com"
  },
]


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};

export default function EventDescriptions({ }: Props) {
  return (
    <>
      <section style={{ backgroundImage: `url("./backgroundimage.png")` }} className='backgroundImage w-[calc(100vw - 100%)] h-[964px] xsm:h-auto sm:h-auto'>
        <nav className='absolute flex justify-between items-center w-[100%]'>
          {/* <img className='ml-[3.54vw]' src='./Logo.png' alt='' /> */}
          <LazyImage alt="" src={"./Logo.png"} style={{ marginLeft: "3.54vw" }} />
          <ul className='text-white text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
            <Link to="/events">
              <motion.li whileHover={{ color: "#FB4A04" }}>Events</motion.li>
            </Link>
            <Link to="/login">
              <motion.li whileHover={{ color: "#FB4A04" }}>Login</motion.li>
            </Link>
          </ul>
        </nav>

        <div className='flex xsm:flex-col sm:flex-col w-[72%] xsm:w-[80%] sm:w-[76%] m-auto gap-[5.878vw]'>
          <div className='relative flex-1 mt-[166px]'>
            <div className='relative z-20'>
              <LazyImage alt="" src={"./hush.png"} classes='relative z-200 min-w-[30.028818443804035vw] ' style={{ position: "relative", zIndex: "100", }} />
            </div>
            <img className='absolute z-0 top-[20px] left-[-7.492795389048991vw] min-w-[39.2507204610951vw]' src='./mainBackgroundShadow.png' alt='' />
          </div>

          <div className='xsm:mt-[100px] sm:mt-[100px] xsm:mb-[100px] sm:mb-[100px] mt-[215px] flex-1 flex flex-col text-white'>
            <h1 className='font-bold text-[clamp(20px,2.07492795389049vw,36px)] min-w-[260px] w-[27.089337175792508vw] xsm:leading-[35px] leading-[59px]'>Hush Haunt 2022 - Oct 19</h1>
            <div className='flex items-start  gap-[7.5px]'>
              <LazyImage alt="" src={"./mainClock.png"} classes='mt-[8px]' />
              <p className='w-[27.04vw] min-w-[260px] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]'>Hush Haunted Attraction, Westland, MI Wed Oct 19</p>
            </div>

            <div className='mt-[44px]'>
              <h2 className='font-bold text-[clamp(20px,2.07492795389049vw,36px)] xsm:leading-[35px] sm:leading-[35px] leading-[59px]'>Description</h2>
              <h3 className='w-[36.72vw] min-w-[260px] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]'>Hush Haunted Attraction is BACK with 3 NEW haunted houses, 3 NEW secret bars, and a new mini game experience </h3>
            </div>
            <p className='leading-[26.06px] mt-[19px] w-[38.81vw] min-w-[260px] text-[clamp(12px,0.9221902017291066vw,16px)] font-[400]'><span className='font-[700] block'>Belly of the Beast:</span>
              The Hush Falls Hotel has a new dark secret brewing in its abyss: a temple to its dark lord: Anglor. Constructed by the undead who reside under the hotel, the temple is alive and its roots have spread like veins throughout the Hotel underpass. Do you dare to explore the negative 13th floor of the Hush Falls Hotel? Just whatever you do, don't look at Anglor directly in his eyes.
            </p>
            <motion.button initial={{ scale: 1, backgroundColor: '#ffffff00' }} whileHover={{ scale: 1.02, backgroundColor: "#FB4A04" }} className='mt-[15px] w-[231px] h-[47px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] border-[4px] border-white'>Read More</motion.button>
          </div>
        </div>
      </section>

      <section className='mt-[48px] mb-[76px] w-[88%] m-auto flex flex-wrap gap-[20px] sm:justify-center md:flex-col md:items-center'>
        {ticketData.map((ticket) => {
          return <TicketCard {...ticket} />
        })}
      </section>

      <section>
        <h2 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]'>Watch Video</h2>
        <div className='flex justify-center items-center  mt-[55px] mb-[79px]'>
          <motion.div whileHover={{ scale: 1.01 }}>
            <LazyImage alt="" src={"./video.png"} classes='shadow-md w-[71.23919308357348vw]' />
          </motion.div>
        </div>
      </section>

      <section className='w-[90%] m-auto'>
        <h2 className='mb-[51px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]'>Gallery</h2>
        <Crousal maxWidth={'503px'} width={"29vw"} settings={settings} crousalData={crousalData} minWidth={"300px"}/>
      </section>

      <section className='mt-[52px] w-[100%] h-[705px] xsm:h-auto bg-[#fed4c3] mb-[79px] '>
        <h2 className='pt-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]'>Location</h2>
        <div className='flex justify-center items-center'>
          <LazyImage alt="" src={"./map.png"} classes='m-auto mb-[20px] mt-[49px] w-[71.23919308357348vw] min-w-[260px] ' />
        </div>
        <div className='flex justify-between items-center xsm:flex-col w-[71.24vw] m-auto'>
          <p className='w-[36.714vw] min-w-[260px] font-[700] text-[#231414] leading-[26px]'>Hush Haunted Attraction is BACK with 3 NEW haunted houses, 3 NEW secret bars, and a new mini game experience </p>
          <button className='xsm:mt-[20px] xsm:mb-[50px] border-[2px] border-[#FB4A04] w-[177px] h-[60px] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] font-[700]'>Open In Maps</button>
        </div>
      </section>

      <section className='mt-[52px] w-[100%] mb-[79px] '>
        <h2 className='mb-[49px] pt-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]'>Contact</h2>
        {contactData.map((data) => {
          return <ContactBar {...data} />
        })}
      </section>

      <section>
        <h2 className='mb-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] xsm:leading-[35px] text-center text-[#231414]'>Terms</h2>
        <p className='mb-[217px] w-[71.239vw] min-w-[260px] m-auto font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-center text-[#231414]'>All tickets are final sale and cannot be exchanged or refunded. By purchasing a ticket to this event, you agree to this purchase policy. Before purchasing your tickets, we urge you to confirm the title, time and location of the event. Hush Haunted Attraction may take and use images & video of all guests. Hush Haunt at all times reserves the right to videotape patrons, and take still images, and to utilize those images and videos for any reason, including marketing, advertising, promotion, on social media.</p>
      </section>
      <Footer />
    </>
  )
}