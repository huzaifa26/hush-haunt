import React, { useState } from 'react'
import OrderRow from '../EventDescriptions/OrderRow'
import Button from '../General/Button'
import SearchBar from '../General/SearchBar'
import TableRow from './TableRow'
import TableRowOrder from './TableRowOrder'

type Props = {}

const data: any = [
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

const data1:any=[
  {},
  {},
]

export default function Orders({ }: Props) {
  return (
    <div>
      <div className='flex gap-[20px] xsm:flex-col sm:flex-col mb-[121px]'>
        <SearchBar text='Search  Order number ,email or name' style={{ width: "28.472622478386167vw",minWidth:"240px",fontSize:"14px", height: "47px", borderRadius: "0px", border: "1px solid #473a3a", }} />

        <div className='w-[13.314121037463977vw] flex flex-col border-[1px] border-[#473a3a] xsm:min-w-[240px]'>
          <label className='text-[12px] font-[400] leading-[19px] text-[#473a3a] mx-[24px]'>Search by</label>
          <select className='indent-[20px] outline-none text-[16px] font-[400] leading-[26px] text-[#473a3a]'>
            <option>Buyer</option>
            <option>Atendees</option>
          </select>
        </div>

        <div className='w-[13.314121037463977vw] flex flex-col border-[1px] border-[#473a3a] xsm:min-w-[240px]'>
          <label className='text-[12px] font-[400] leading-[19px] text-[#473a3a] mx-[24px]'>Data Range</label>
          <select className='indent-[20px] outline-none text-[16px] font-[400] leading-[26px] text-[#473a3a]'>
            <option>past 3 month</option>
            <option>7 days</option>
            <option>1 month</option>
          </select>
        </div>
      </div>

      <div className='divide-y-2 w-[78.55907780979827vw] flex flex-col xsm:min-w-[240px]'>
        {data1.map((d:any)=>{
          return(
            <OrderRow data={d}/>
          )
        })}
      </div>
    </div>
  )
}