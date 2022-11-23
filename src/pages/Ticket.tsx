import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'

type Props = {}

export default function Ticket({ }: Props) {
    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    <LazyImage alt="" src={"./Logo.png"} classes='ml-[8px]' />
                    <SearchBar />
                </div>

                <ul className='text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[31px] mr-[7.37vw] items-center'>
                    <li className='flex items-center gap-[8px]'>
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Back</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode</p>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-[48px] items-center ml-[6.916426512968299vw] mt-[100px]'>
                <div className='flex justify-center items-center w-[155px] h-[149px] rounded-full bg-[#F5F5F5]'>
                    <img src='./profile.svg' alt='' />
                </div>
                <div>
                    <div className='flex gap-[12px] items-center'>
                        <h2 className='font-[700] text-[32px] leading-[52px] text-[#473a3a]'>Name & Surname</h2>
                        <img src='./editIcon.svg' alt='' />
                    </div>
                    <div className='flex'>
                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>0 Orders Booked</p>
                        <pre className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>{" . "}</pre>
                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>2 likes</p>
                    </div>
                </div>
            </div>

            <div className='w-[42.70893371757925vw] m-auto'>
                <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] ml-[3%] mt-[85px]'>Orders</h3>
                <div className='flex flex-col items-center'>
                    <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mb-[13px]'>Looking for your tickets?</h3>
                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] mb-[36px]'>You need to verify your email to view transfers and gifts.</p>
                    <Button width='232px' height='51px' text='Verify your email' style={{ marginBottom: "36px", background: "#fff", border: "1px solid #473a3a", borderRadius: "0px", color: "#473a3a", fontSize: "16xp", fontWeight: "400" }} />
                    <img className='mb-[36px]' src='./ticketIcon.svg' alt='' />
                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] mb-[36px]'>No upcoming order</p>
                </div>
                <div className='w-full h-[2px] bg-[#D9D9D9] mb-[69px]'></div>

                <div>
                    <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mb-[49px] ml-[3%]'>Likes</h3>
                    <div className='flex gap-[20px]'>

                        <div className='flex flex-col gap-[49px]'>
                            <img className='w-[20.576368876080693vw]' src='./likes1.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <img src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[49px]'>
                            <img className='w-[20.576368876080693vw]' src='./likes2.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <img src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[242px]'>
                <Footer showFooterHeaders={false}/>
            </div>
        </div>
    )
}