import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'

type Props = {}

export default function TicketVerifiedEmail({ }: Props) {
    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    <LazyImage alt="" src={"./Logo.png"} classes='ml-[8px]' />
                    <SearchBar />
                </div>

                <ul className='text-[#493c3c] text-[16px] font-[700] flex gap-[31px] mr-[7.37vw] items-center'>
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
                        <p className='font-[400] text-[20px] leading-[33px] text-[#473a3a]'>0 Orders Booked</p>
                        <pre className='font-[400] text-[20px] leading-[33px] text-[#473a3a]'>{" . "}</pre>
                        <p className='font-[400] text-[20px] leading-[33px] text-[#473a3a]'>2 likes</p>
                    </div>
                </div>
            </div>

            <div className='w-[42.70893371757925vw] m-auto'>
                <h3 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] ml-[3%] mt-[85px] mb-[90px]'>Orders</h3>
                <div className='flex flex-col gap-[28px] items-center'>
                    <div className='flex gap-[20px] border-[1px] border-[#FB4A0424] w-[41.95965417867435vw]'>
                        <img className='w-[13.314121037463977vw]' src='./verifiedTicket1.png' alt='' />
                        <div className='flex flex-col justify-start'>
                            <h2 className='font-[700] text-[20px] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                            <div className='flex items-center gap-[23px]'>
                                <p className='font-[400] text-[16px] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                <img src='./download.png' alt='' />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[20px] border-[1px] border-[#FB4A0424] w-[41.95965417867435vw]'>
                        <img className='w-[13.314121037463977vw]' src='./verifiedTicket2.png' alt='' />
                        <div className='flex flex-col justify-start'>
                            <h2 className='font-[700] text-[20px] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                            <div className='flex items-center gap-[23px]'>
                                <p className='font-[400] text-[16px] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                <img src='./download.png' alt='' />
                            </div>
                        </div>
                    </div>

                    <p className='font-[400] text-[20px] leading-[33px] text-[#1977F3] mt-[63px] mb-[48px]'>See past orders</p>
                </div>
                <div className='w-full h-[2px] bg-[#D9D9D9] mb-[69px]'></div>

                <div>
                    <h3 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mb-[49px] ml-[3%]'>Likes</h3>
                    <div className='flex gap-[20px]'>
                        <div className='flex flex-col gap-[49px]'>
                            <img className='w-[20.576368876080693vw]' src='./likes1.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] text-[20px] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[16px] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <img src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[49px]'>
                            <img className='w-[20.576368876080693vw]' src='./likes2.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] text-[20px] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[16px] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <img src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[242px]'>
                <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}