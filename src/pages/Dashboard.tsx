import React, { useState } from 'react';
import LazyImage from '../components/General/LazyImage';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import EventsCards from '../components/Events/EventsCards';
import { data, data1 } from "./Events";
import SearchBar from '../components/General/SearchBar';
import Button from '../components/General/Button';

type Props = {}

export default function Dashboard({ }: Props) {

    const [openContextMenu,setOpenContextMenu]=useState<boolean>(false);
    return (
        <div className='w-[calc(100vw - 100%)]'>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    {/* <img className='ml-[8px]' src='./Logo.png' alt='' /> */}
                    <LazyImage alt="" src={"./Logo.png"} classes='ml-[8px]' />
                    <SearchBar />
                </div>

                <ul className='text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[31px] mr-[7.37vw] items-center'>
                    <li className='flex items-center gap-[8px]'>
                        <p className='text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center'>+</p>
                        <p className='text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center'>Create Events</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./heart.png' alt='' />
                        <p className='text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center'>Likes</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./ticket.png' alt='' />
                        <p className='text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center'>Ticket</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <p className='text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center'>partymode@gmail.com</p>
                    </li>
                    <li className='relative'>
                        <div className='flex flex-col items-center gap-[5px]' onClick={()=>{setOpenContextMenu(!openContextMenu)}}>
                            <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                            <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                            <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        </div>
                        {openContextMenu &&
                        <div className='transition-all w-[181px] h-[170px] bg-white shadow-md absolute z-[1] flex flex-col justify-around py-[20px] top-full left-[-270%]'>
                            <p className='text-[#473a3a] font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center'> Explore Community</p>
                            <p className='text-[#473a3a] font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center'>Invite a Friend</p>
                            <p className='text-[#473a3a] font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center'>Vibe Check</p>
                        </div>
                        }
                    </li>
                </ul>
            </nav>

            <section className='dashboardBackground h-[778px] w-[100%] flex relative'>
                <div className='flex flex-col justify-center absolute top-[332px] left-[65%]'>
                    <h1 className="mb-[23px] eventTextFont w-[476px] font-[400] text-[96px] leading-[113px] text-[#ffffff]">NOW <span className='eventTextFont text-[64px]'>IS YOUR</span> TIME</h1>
                    <Button width={"17.75vw"} height={"61px"} text={"Find your next Event"} />
                </div>
            </section>

            <div className='bg-white relative top-[-28px] p-[14px] eventDivBoxShadow w-[85.76368876080691vw] h-[118px] m-auto'>
                <div className='pt-[5px] pb-[18px] pl-[10px] border-l-[2px] border-[#FB4A04]'>
                    <h2 className='mb-[8px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] text-[#473a3a]'>Do events help you find connection?</h2>
                    <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] w-[100%] leading-[26px] text-[#473a3a]'>Help us understand how attending events contributes to building social connection by taking a short survey before and after your next event.</p>
                </div>
            </div>

            <section>
                <div className='flex flex-col justify-center items-center mt-[115px]'>
                    <h2 className="font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-[#473a3a]">Check out trending categories</h2>
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
            <div className='mt-[354px]'>
                <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}