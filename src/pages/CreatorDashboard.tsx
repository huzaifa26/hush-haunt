import React from 'react'
import Button from '../components/General/Button'
import Layout from '../components/General/Layout'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'

type Props = {}

export default function CreatorDashboard({ }: Props) {
    return (
        <Layout>
            <div className='w-full pt-[65px] ml-[12.968299711815561vw]'>
                <h1 className='font-[700] text-[36px] leading-[58px] text-[#473a3a] ml-[10px]'>Welcome, <span className='text-[#FB4A04]'>Partymode</span></h1>
                <div className='border-2 border-[#D9D9D9] rounded-tl-[20px] rounded-tr-[20px] w-[52.04610951008645vw] px-[21px] divide-y-2 mt-[99px]'>
                    <div className='mb-[40px]'>
                        <h2 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mt-[12px]'>Your event checklist</h2>
                        <p className='font-[400] text-[12px] leading-[20px] text-[#473a3a] '>We make it easy to plan successful events. Here's how to start!</p>
                    </div>
                    <div className='flex justify-between px-[17px] py-[30px]'>
                        <h3 className='font-[700] text-[16px] leading-[26.06px] text-[#473a3a] mt-[12px]'>Create your first event</h3>
                        <img src='./dropdown.svg' />
                    </div>
                    <div className='flex justify-between px-[17px] py-[30px]'>
                        <h3 className='font-[700] text-[16px] leading-[26.06px] text-[#473a3a] mt-[12px]'>Build your profile</h3>
                        <img src='./dropdown.svg' />
                    </div>
                    <div className='flex justify-between px-[17px] py-[30px]'>
                        <h3 className='font-[700] text-[16px] leading-[26.06px] text-[#473a3a] mt-[12px]'>Boost Your Event</h3>
                        <img src='./dropdown.svg' />
                    </div>
                    <div className='flex justify-between px-[17px] py-[30px]'>
                        <h3 className='font-[700] text-[16px] leading-[26.06px] text-[#473a3a] mt-[12px]'>Set up your finances</h3>
                        <img src='./dropdown.svg' />
                    </div>
                </div>


                <div className='w-[52.04610951008645vw] border-2 border-[#D9D9D9] mt-[70px] flex flex-col'>
                    <h2 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mt-[30px] mb-[39px] ml-[33px]'>Your next event</h2>
                    <div className='w-full h-[71px] bg-[#fee4d9] flex items-center justify-between pl-[39px] pr-[100px]'>
                        <h3 className='font-[700] text-[16px] leading-[26.06px] text-[#473a3a] mt-[12px]'>Nov 18</h3>
                        <p className='font-[400] text-[16px] leading-[26.06px] text-[#473a3a] '>event title</p>
                        <p className='font-[400] text-[14px] leading-[22.9px] text-[#473a3a] '><span className='text-[16px] leading-[26.06px]'>Draft:</span> start  November 18 at  00:00 ends by 00:00am</p>
                    </div>

                    <Button width='13.314121037463977vw' height='54px' text="Continue Editing" style={{borderRadius:"20px",background:"#FB4A04",fontSize:"16px",marginTop:"33px",marginBottom:"17px",alignSelf:"flex-end", marginRight:"23px"}}/>
                </div>


                <div className='w-[52.04610951008645vw] border-2 border-[#D9D9D9] mt-[70px] flex flex-col'>
                    <h2 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mt-[8px] ml-[33px]'>Boost your Events with Vibe Check</h2>
                    <p className='font-[400] text-[16px] leading-[26.06px] text-[#473a3a] mt-[25px] ml-[33px]'>Take your marketing to the next level</p>

                    <Button width='13.314121037463977vw' height='54px' text="Vibe check" style={{borderRadius:"20px",background:"#ffff",border:"1px solid #FB4A04",color:"#FB4A04",fontSize:"16px",marginTop:"31px",marginBottom:"22px",alignSelf:"flex-end", marginRight:"23px"}}/>
                </div>

                <div className='w-[52.04610951008645vw] border-2 border-[#D9D9D9] mt-[70px] flex flex-col mb-[316px]'>
                    <h2 className='font-[700] text-[24px] leading-[39px] text-[#473a3a] mt-[8px] ml-[33px]'>Boost your Events with Vibe Check</h2>
                    <div className='flex gap-[74px] justify-center mt-[32px] mb-[30px]'>
                        <div className='relative w-[19.654178674351584vw] h-[172px] bg-[#473a3a] rounded-[20px] flex justify-center items-center'>
                            <h3 className='w-[231px] font-[700] text-[20px] leading-[32.58px] text-white'>4 Faqs about setting up your first event</h3>
                            <div className='absolute w-[52px] h-[52px] bg-white flex justify-center items-center rounded-full bottom-[9px] right-[18px]'>
                                <img className='' src='./arrow.svg' alt=''/>
                            </div>
                        </div>
                        <div className='relative w-[19.654178674351584vw] h-[172px] bg-[#473a3a] rounded-[20px] flex justify-center items-center'>
                            <h3 className='w-[231px] font-[700] text-[20px] leading-[32.58px] text-white'>4 Faqs about setting up your first event</h3>
                            <div className='absolute w-[52px] h-[52px] bg-white flex justify-center items-center rounded-full bottom-[9px] right-[18px]'>
                                <img className='' src='./arrow.svg' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}