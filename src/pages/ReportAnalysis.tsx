import React from 'react'
import BarChart from '../components/ReportAnalysis/BarChart'
import Layout from '../components/General/Layout'

type Props = {}

interface Data {
    label: string;
    value: number;
}

const DATA: Data[] = [
    { label: "Apples", value: 100 },
    { label: "Bananas", value: 200 },
    { label: "Oranges", value: 50 },
    { label: "Kiwis", value: 150 }
];

export default function ReportAnalysis({ }: Props) {
    return (
        <Layout>
            <div className='w-[85.76368876080691vw] ml-[121px] mt-[51px]'>
            <div className='w-full'>
                <div className='flex gap-[39px] ml-[2.4207492795389047vw]'>
                    <label className='font-[400] text-[20px] leading-[32.58px] text-[#000000]'>Filter by Date</label>
                    <select className='w-[155px] h-[39px] rounded-[10px] border-[1px] border-[#CCCCCC] px-[34px] font-[400] text-[15px] leading-[24.43px] text-[#000000]'>
                        <option>7 days</option>
                        <option>1 month</option>
                        <option>3 month</option>
                    </select>
                </div>
                <div className='flex gap-[32.5px] mt-[47px] justify-center'>
                    <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] h-[173px] rounded-[10px] bg-[#FB4A043D]'>
                        <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Total Revenue</h2>
                        <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#000000]'>$20,000</h1>
                        <div className='flex gap-[10px]'>
                            <img src='./updropdown.svg' alt='' />
                            <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] h-[173px] rounded-[10px] bg-[#FB4A04B8]'>
                        <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Ticket sales </h2>
                        <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#fff]'>$20,000</h1>
                        <div className='flex gap-[10px]'>
                            <img src='./updropdown.svg' alt='' />
                            <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] h-[173px] rounded-[10px] bg-[#FBB60491]'>
                        <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Live Streaming</h2>
                        <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#fff]'>$20,000</h1>
                        <div className='flex gap-[10px]'>
                            <img src='./updropdown.svg' alt='' />
                            <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[580px] flex gap-[18px] mt-[95px]'>
                <div className='w-[48.5878962536023vw] h-full rounded-[20px]'>
                    <BarChart />
                </div>
                <div className='w-[36.138328530259365vw] h-full bg-[aqua] rounded-[20px]'></div>
            </div>


            <div className='w-full h-[580px] flex gap-[18px] mt-[95px]'>
                <div className='w-[48.5878962536023vw] h-full bg-[aqua] rounded-[20px]'></div>
                <div className='w-[36.138328530259365vw] h-full bg-[aqua] rounded-[20px]'></div>
            </div>


            </div>
        </Layout>
    )
}