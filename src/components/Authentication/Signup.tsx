import React from 'react'
import Button from '../General/Button'
import LazyImage from '../General/LazyImage'

type Props = {}

export default function Signup({ }: Props) {
    return (
        <section className='w-[calc(100vw - 100%)] h-[1142px] flex'>
            <div className='authBackground flex-1 flex justify-center items-center'>
                <div className='authFliterEffect rounded-[50px] w-[39.76945244956772vw] h-[331px] flex justify-center items-center ml-[-45px]'>
                    <h1 className='w-[35vw] font-[700] text-[48px] leading-[78px] text-[#fff]'>Exclusive <span className='text-[#FB4A04]'>events,</span> <span className='font-[700] text-[32px] leading-[52px]'>priceless memories.</span></h1>
                </div>
            </div>
            <div className='flex-1 bg-[#fff] ml-[-45px] rounded-tl-[50px] rounded-bl-[50px]'>
                <div className='w-[52%] m-auto'>
                    <div className='pt-[58px]'>
                        {/* <img src='./logo.png' /> */}
                        <LazyImage alt="" src="/logo.png"/>
                        <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[13px]'>Signup</h1>
                    </div>

                    <form className='mt-[72px]'>
                        <div className='w-[27.608069164265128vw] flex gap-[1.2680115273775217vw]'>
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[12px]'>Name</label>
                                <input className=' h-[50px] rounded-[10px] border-[1px] border-[#473a3a]' />
                            </div>
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[12px]'>Email</label>
                                <input className=' h-[50px] rounded-[10px] border-[1px] border-[#473a3a]' />
                            </div>
                        </div>
                        <div className='mt-[64px]'>
                            <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[12px]'>Password</label>
                            <input className='w-[27.608069164265128vw] h-[50px] block rounded-[10px] border-[1px] border-[#473a3a]' />
                            <div className='flex mt-[19px] gap-[10px]'>
                                <input type={"checkbox"} />
                                <label className='text-[12px]'>I have read and agree with <span className='text-[#1977F3]'>terms of services</span> and <span className='text-[#1977F3]'>Privacy policy</span></label>
                            </div>
                        </div>

                        <Button width="27.608069164265128vw" height='57px' text="SignUp" style={{ background: "#FB4A04", color: "#fff", marginTop: "85px" }} />

                        <div className='flex justify-between items-center mt-[37px]'>
                            <div className='min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]'> </div>
                            <p className='font-[400] text-[12px] leading-[19px] text-[#918a8a]'>or Signup with</p>
                            <div className='min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]'> </div>
                        </div>

                        <div className='flex justify-between my-[100px]'>
                            <div className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                {/* <img src='/facebook.png' /> */}
                                <LazyImage alt="" src="/facebook.png"/>
                            </div>
                            <div className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                {/* <img src='/google.png' /> */}
                                <LazyImage alt="" src="/google.png"/>
                            </div>
                            <div className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                {/* <img src='/apple.png' /> */}
                                <LazyImage alt="" src="/apple.png"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}