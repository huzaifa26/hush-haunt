import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'

type Props = {}

export default function ContactUs({ }: Props) {
    return (
        <div className='w-[1728px]'>
            <nav className='flex gap-[143px] items-center w-[100%]'>
                <LazyImage alt="" src={"./Logo.png"} style={{ marginLeft: "15px" }} />
                <ul className='text-[#473a3a] text-[16px] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
                    <li>Help centers</li>
                    <Link to="/events"><li>Events</li></Link>
                </ul>
            </nav>

            <section className='relative top-0 w-full h-[514px]'>
                <LazyImage src='./contactMain.png' style={{ objectFit: "cover", minWidth: "1728px", position: "absolute", top: "0px", zIndex: "10" }} />
                <div className='relative z-20 mt-[150px] ml-[14.178674351585014vw]'>
                    <h1 className='font-[700] text-[48px] text-[#fff] leading-[80px]'>PartyMode Help Center</h1>
                    <p className='font-[700] text-[48px] text-[#fff] leading-[80px]'>Get Answers and resources</p>
                    <input className='border-[3] border-[#f6ccbb] w-[20.634005763688762vw] h-[52px] indent-[67px] !bg-[#fff]' placeholder='Search Help' style={{ backgroundImage: `url("../assets/contactSearch.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "18px center" }}></input>
                </div>
            </section>

            <section>
                <div className='flex justify-between items-center w-[86vw] m-auto mt-[59px] gap-[3.7463976945244957vw]'>
                    <div className='min-w-[23.57348703170029vw] min-h-[1px] bg-[#cfcfcf]'></div>
                    <h2 className='text-[#FB4A04] font-[700] text-[36px] leading-[80px] text-center'>Partymode Support Articles</h2>
                    <div className='min-w-[23.57348703170029vw] min-h-[1px] bg-[#cfcfcf]'></div>
                </div>

                <div className='w-[86%] m-auto flex mt-[119px] flex-col'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a]'>Getting Started</h3>
                            <div className='mt-[17px]'>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a]'>Account Setup</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a]'>Creating an event</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a]'>Manage Registration</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a]'>Market and promote</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a]'>Analyze data</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a] w-[41.671469740634vw] h-[73px]'>Partymode livestreams and videos on demand</h3>
                            <div className='mt-[0px]'>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>How do I access my livestreams and videos on demand?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Watch how to access your media</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Frequently asked questions about the live stream experience</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Streaming Recommendations</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Troubleshooting Guide</p>
                                </div>
                                <p className='font-[400] text-[20px] leading-[52px] text-[#1977F3] ml-[27px]'>See all articles</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-[142px]'>
                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a] h-[73px]'>Membership </h3>
                            <div className='mt-[20px]'>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[40.80691642651297vw]'>Can I refund or Cancel my subscribtion ?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[40.80691642651297vw]'>I accidentally sent my ticket to the wrong email address. </p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[40.80691642651297vw]'>I logged into my account on Party mode, but don’t see my ticket there. </p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[40.80691642651297vw]'>How do I process a payment while on a payment plan?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[40.80691642651297vw]'>Why did you charge me twice? </p>
                                </div>
                                <p className='font-[400] text-[20px] leading-[52px] text-[#1977F3] ml-[27px]'>See all articles</p>
                            </div>
                        </div>


                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a] h-[73px]'>Creators and Promoters</h3>
                            <div className='mt-[20px]'>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>How much does it cost to use  Partymode to sell tickets?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Does Partymode support international events?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>I see a lot of music events on Partymode. Do you support any other artist?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Early releases and gated content.</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>How do you log in to Partymode ?</p>
                                </div>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Can I take a look around the system with a trial username and password</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-[109px]'>
                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a] h-[73px]'>General </h3>
                            <div className='mt-[20px]'>
                                <div className='flex items-center gap-[9px]'>
                                    <img src='darkCircle.png' alt='' />
                                    <p className='font-[400] text-[20px] leading-[52px] text-[#473a3a] w-[42.93948126801153vw]'>Where is Partymode located?</p>
                                </div>
                                <p className='font-[400] text-[20px] leading-[52px] text-[#1977F3] ml-[27px] mt-[0px]'>See all articles</p>
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h3 className='font-[700] text-[32px] leading-[52px] text-[#473a3a] h-[73px]'>Need More Support </h3>
                            <Button width='231px' height='58px' text="Contact us" style={{background:"#FB4A04",borderRadius:"20px"}}/>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-[286px]'>
                <Footer />
            </div>
        </div>
    )
}