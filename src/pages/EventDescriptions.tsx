import React from 'react'
import TicketCard from '../components/EventDescriptions/TicketCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crousal from '../components/EventDescriptions/Crousal';
import ContactBar from '../components/EventDescriptions/ContactBar';
import Footer from '../components/Footer';

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

const contactData=[
  {
    id:"1",
    heading:"Email",
    text:"partymode@mail.com"
  },
  {
    id:"2",
    heading:"xxx-xxx-xxxxxx",
    text:"partymode@mail.com"
  },
  {
    id:"3",
    heading:"Website",
    text:"www.partymode.com"
  },
]

export default function EventDescriptions({ }: Props) {



  return (
    <>
      <section className='backgroundImage w-[calc(100vw - 100%)] h-[964px]'>
        <nav className='absolute flex justify-between items-center w-[100%]'>
          <img className='ml-[3.54vw]' src='./Logo.png' alt='' />
          <ul className='text-white flex gap-[5.244vw] mr-[8.94vw]'>
            <li>Events</li>
            <li>Login</li>
          </ul>
        </nav>

        <div className='flex w-[72%] m-auto gap-[5.878vw]'>
          <div className='flex-1 mt-[166px]'>
            <img className='min-w-[521px]' src='./hush.png' alt='' />
            <img src='' alt='' />
          </div>

          <div className='mt-[215px] flex-1 flex flex-col  text-white'>
            <h1 className='font-bold text-[36px] leading-[59px]'>Hush Haunt 2022 - Oct 19</h1>
            <div className='flex items-start  gap-[7.5px]'>
              <img className='mt-[8px]' src='./mainClock.png' alt='' />
              <p className='w-[27.04vw] font-bold text-[20px] leading-[33px]'>Hush Haunted Attraction, Westland, MI Wed Oct 19</p>
            </div>

            <div className='mt-[44px]'>
              <h2 className='font-bold text-[36px] leading-[59px]'>Description</h2>
              <h3 className='w-[36.72vw] font-bold text-[20px] leading-[33px]'>Hush Haunted Attraction is BACK with 3 NEW haunted houses, 3 NEW secret bars, and a new mini game experience </h3>
            </div>
            <p className='leading-[26.06px] mt-[19px] w-[38.81vw] text-[16px] font-[400]'><span className='font-[700] block'>Belly of the Beast:</span>
              The Hush Falls Hotel has a new dark secret brewing in its abyss: a temple to its dark lord: Anglor. Constructed by the undead who reside under the hotel, the temple is alive and its roots have spread like veins throughout the Hotel underpass. Do you dare to explore the negative 13th floor of the Hush Falls Hotel? Just whatever you do, don't look at Anglor directly in his eyes.
            </p>
            <button className='mt-[15px] w-[231px] h-[47px] font-[700] text-[24px] leading-[39px] border-[4px] border-white'>Read More</button>
          </div>
        </div>
      </section>

      <section className='mt-[48px] mb-[76px] w-[88%] m-auto flex flex-wrap gap-[20px]'>
        {ticketData.map((ticket) => {
          return <TicketCard {...ticket} />
        })}

      </section>

      <section>
        <h2 className='font-[700] text-[36px] leading-[58.64px] text-center text-[#231414]'>Watch Video</h2>
        <img className='m-auto mt-[55px] mb-[79px]' src='./video.png' alt='' />
      </section>

      <section className='w-[90%] m-auto'>
        <h2 className='mb-[51px] font-[700] text-[36px] leading-[58.64px] text-center text-[#231414]'>Gallery</h2>
        <Crousal crousalData={crousalData} />
      </section>

      <section className='mt-[52px] w-[100%] h-[705px] bg-[#fed4c3] mb-[79px] '>
        <h2 className='pt-[46px] font-[700] text-[36px] leading-[58.64px] text-center text-[#231414]'>Location</h2>
        <img className='m-auto mb-[20px] mt-[49px]' src='./map.png' alt='' />
        <div className='flex justify-between items-center w-[71.24vw] m-auto'>
          <p className='w-[36.714vw] font-[700] text-[#231414] leading-[26px]'>Hush Haunted Attraction is BACK with 3 NEW haunted houses, 3 NEW secret bars, and a new mini game experience </p>
          <button className='border-[2px] border-[#FB4A04] w-[177px] h-[60px] text-[16px] leading-[26px] font-[700]'>Open In Maps</button>
        </div>
      </section>

      <section className='mt-[52px] w-[100%] mb-[79px] '>
        <h2 className='mb-[49px] pt-[46px] font-[700] text-[36px] leading-[58.64px] text-center text-[#231414]'>Contact</h2>
        {contactData.map((data)=>{
          return <ContactBar {...data}/>
        })}
      </section>

      <section>
        <h2 className='mb-[46px] font-[700] text-[36px] leading-[58.64px] text-center text-[#231414]'>Terms</h2>
        <p className='mb-[217px] w-[71.239vw] m-auto font-[400] text-[16px] leading-[26.06px] text-center text-[#231414]'>All tickets are final sale and cannot be exchanged or refunded. By purchasing a ticket to this event, you agree to this purchase policy. Before purchasing your tickets, we urge you to confirm the title, time and location of the event. Hush Haunted Attraction may take and use images & video of all guests. Hush Haunt at all times reserves the right to videotape patrons, and take still images, and to utilize those images and videos for any reason, including marketing, advertising, promotion, on social media.</p>
      </section>

      <Footer/>
    </>
  )
}