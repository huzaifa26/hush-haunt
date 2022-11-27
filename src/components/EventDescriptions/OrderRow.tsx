import React, { useState } from 'react'
import TableRowOrder from '../EventsDashboard/TableRowOrder';
import { motion } from "framer-motion"

type Props = {}

const data1: any = [
    {
        id: 1,
        events: ["Nov", "18"],
        img: "./tableDefault.svg",
        sold: "0/100",
        gross: "$000",
        status: "Draft"
    },
    {
        id: 2,
        events: ["Nov", "18"],
        img: "./upcommingEvent.svg",
        sold: "50/100",
        gross: "$1000",
        status: "Published"
    },
]

export default function OrderRow({ data }: any) {
    const [showOrderDetail, setShowOrderDetail] = useState<boolean>(false);

    return (
        <div className='divide-y-2'>
            <div style={showOrderDetail?{paddingBottom:"50px"}:{}} className='w-[78.55907780979827vw] xsm:min-w-[245px] py-[10px]'>
                <div className='flex justify-between items-center mx-[2%] xsm:flex-col sm:flex-col xsm:gap-[10px] sm:gap-[10px]'>
                    <div className='flex gap-[3.4582132564841497vw] items-center xsm:flex-col sm:flex-col xsm:items-start'>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-[32px] font-[400] leading-[52px] text-[#f21b1b]'>Nov</h3>
                            <p className='text-[16px] font-[400] leading-[26px] text-[#000]'>10</p>
                        </div>
                        <img src='/upcommingEvent.svg' alt='' />
                        <div className='flex flex-col'>
                            <h3 className='text-[20px] font-[700] leading-[24px] text-[#473a3a]'>Event Name</h3>
                            <p className='text-[16px] font-[400] leading-[19px] text-[#473a3a]'>Tuesday,12th december, 2022.</p>
                        </div>
                        <div className='flex gap-[0.5763688760806917vw] items-center'>
                            <img src='/eventOrderTicket.svg' alt='' />
                            <p>0/<span>22</span></p>
                        </div>
                    </div>
                    <div className='flex gap-[0.5763688760806917vw] xsm:self-end sm:self-end mx-[2%]' onClick={() => setShowOrderDetail(!showOrderDetail)}>
                        <p>See  orders details</p>
                        <img style={showOrderDetail ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} src='/dropdown.svg' alt='' />
                    </div>
                </div>
                <motion.div style={showOrderDetail ? { maxHeight: "10000px" } : {maxHeight: "0px"}} className=' w-full whitespace-nowrap overflow-auto'>
                    <table  className=" table-auto w-[78.32853025936599vw] mt-[43px] relative z-10 border-collapse border border-slate-500 ">
                        <thead className='bg-[#fed4c3] border-collapse border border-slate-500'>
                            <tr className=''>
                                <th className='py-[17px] border-collapse border border-slate-500'>Name</th>
                                <th className='py-[17px] border-collapse border border-slate-500'>Order ID number</th>
                                <th className='py-[17px] border-collapse border border-slate-500'>Email Address</th>
                                <th className='py-[17px] border-collapse border border-slate-500'>Ticket  purchased</th>
                            </tr>
                        </thead>
                        <tbody className='w-[78.32853025936599vw]'>
                            {data1.length > 0 && data1.map((d: any) => {
                                return (
                                    <TableRowOrder data={data1} />
                                )
                            })
                            }
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    )
}