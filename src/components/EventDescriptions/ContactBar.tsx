import React from 'react'

type Props={
  id:string,
  heading:string,
  text:string
}

export default function ContactBar({heading,text}: Props) {
  return (
    <div className='flex justify-between items-center px-[23px] my-[4px] w-[71.296%] min-w-[260px] h-[74px] bg-[#fed4c3] m-auto'>
      <h3 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] xsm:leading-[15px] text-[#231414]'>{heading}</h3>
      <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#231414]'>{text}</p>
    </div>
  )
}