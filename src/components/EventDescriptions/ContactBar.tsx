import React from 'react'


export default function ContactBar({heading,text}: any) {
  return (
    <div className='flex justify-between items-center px-[23px] my-[4px] w-[71.296%] h-[74px] bg-[#fed4c3] m-auto'>
      <h3 className='font-[700] text-[20px] leading-[33px] text-[#231414]'>{heading}</h3>
      <p className='font-[400] text-[16px] leading-[26px] text-[#231414]'>{text}</p>
    </div>
  )
}