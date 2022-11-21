import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import LazyImage from '../components/General/LazyImage'

type Props = {}

export default function HelpSub({ }: Props) {
    return (
        <div>
            <nav className='flex gap-[143px] items-center w-[100%]'>
                <LazyImage alt="" src={"./Logo.png"} style={{ marginLeft: "15px" }} />
                <ul className='text-[#473a3a] text-[16px] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
                    <li>Help centers</li>
                    <Link to="/events"><li>Events</li></Link>
                </ul>
            </nav>

            <section className='relative top-0 w-full h-[219px]'>
                <LazyImage src='./helpsubMain.png' style={{ objectFit: "contain", minWidth: "1728px", position: "absolute", top: "0px", zIndex: "10" }} />
                <div className='relative z-20'>
                    <h1 className='font-[700] text-[36px] leading-[58px] text-[#fff] mt-[102px] mb-[52px] text-center'>Partymode livestreams and videos on demand </h1>
                </div>
            </section>

            <section className='w-[86vw] m-auto flex pt-[86px]'>
                <div className='flex-1'>
                    <p className='h-[38px] font-[700] text-[12px] leading-[20px] text-[#1977F3] w-[42.305475504322764vw]'>Solution home / Partymode Support Articles / Partymode livestreams and videos on demand</p>
                    <h2 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] w-[35.04322766570605vw] mb-[17px]'>How do I access my livestreams and videos on demand?</h2>
                    <h3 className='font-[400] text-[16px] leading-[26px] text-[#473a3a] h-[40px]'>Modified on: Thu, Jan 14, 2021 at 4:36 PM</h3>
                    <div className='max-w-[23.57348703170029vw] min-h-[1px] bg-[#473a3a] mb-[37px]'></div>

                    <div className='w-[35.04322766570605vw]'>
                        <p className='font-[400] text-[16px] leading-[26px] text-[#473a3a] mb-[37px]'>Livestreams and videos on demand are accessed and viewed through Tixr. You can get here through Partymode.com, your Partymode confirmation email, or the event page.</p>
                        <h3 className='font-[700] text-[20px] leading-[33px] text-[#473a3a]'>1. Your Partymode Account</h3>
                        <p className='font-[400] text-[16px] leading-[26px] text-[#473a3a] mb-[23px]'>You can access your livestreams and on demand videos directly through your Partymode account. By logging in at Partymode.com, hover over your initials in the upper right hand corner, click My Media, hover over the event card under your Live Streams or Videos section, and click the play button in the left hand corner on the event card. </p>
                        <LazyImage src='helpsubImage.png' classes='mb-[52px]'/>
                        <h3 className='font-[700] text-[20px] leading-[33px] text-[#473a3a] mb-[30px]'>2. Your Email Confirmation</h3>
                        <p className='font-[400] text-[16px] leading-[26px] text-[#473a3a] mb-[30px]'>You can also access your livestream or videos on demand right from your confirmation email! Click the blue</p>
                        <p className='font-[400] text-[16px] leading-[26px] text-[#473a3a]'>button that says Go to Livestream under the ticket name and it will direct you to the livestream or video on demand screen.PLEASE NOTE: You must be logged in to your Party account before being able to view the live stream and you must press play on both the event card and streaming page for the livestream or video on demand to begin.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mt-[40px] mb-[29px] h-[43px]'>Related Articles</h3>
                    <div className='mt-[17px] flex flex-col gap-[5px]'>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>How much does it cost to use  Partymode to sell tickets?</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Does Partymode support international events?</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>I see a lot of music events on Partymode. Do you support any other artist?</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Early releases and gated content.</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>How do you log in to Partymode ?</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Can I take a look around the system with a trial username and password</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Frequently asked questions about the live stream experience</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Streaming Recommendations</p>
                        </div>
                        <div className='flex items-center gap-[9px]'>
                            <img src='darkCircle.png' alt='' />
                            <p className='font-[400] text-[20px] leading-[32px] text-[#473a3a] h-[43px]'>Troubleshooting Guide</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-[149px]'>
                <Footer />
            </div>
        </div>
    )
}

