import React from 'react'
import Footer from '../components/Footer'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'

type Props = {}

export default function
    ({ }: Props) {
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
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode@gmail.com</p>
                    </li>
                </ul>
            </nav>

            <div className='mt-[100px] ml-[14.351585014409222vw]'>
                <h1 className='font-[700] text-[48px] leading-[78px] text-[#FB4A04] self-start '>Likes</h1>
                <div className='flex gap-[20px] mt-[26px]'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[40.80691642651297vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#FB4A0483]'>Thurs Oct 13 at 7:00pm EDT</p>
                        <div className='flex items-center gap-[23px]'>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>Free</p>
                            <img src='./download.png' alt=''/>
                        </div>
                    </div>
                    <img src='./likes1.png' alt=''/>
                </div>

                <div className='max-w-[63.976945244956774vw] min-h-[2px] bg-[#D9D9D9] my-[55px]'></div>

                <div className='flex gap-[20px]'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[40.80691642651297vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#FB4A0483]'>Thurs Oct 13 at 7:00pm EDT</p>
                        <div className='flex items-center gap-[23px]'>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>Free</p>
                            <img src='./download.png' alt=''/>
                        </div>
                    </div>
                    <img src='./likes2.png' alt=''/>
                </div>
            </div>
            <div className='mt-[219px]'>
            <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}