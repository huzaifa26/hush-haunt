import React from 'react'

type Props = {
    width:string,
    height:string,
    text:string,
    style?:any
}

export default function Button({width,height,text,style}: Props) {
  return (
    <button style={{width:width,height:height, ...style}} className='rounded-[20px] text-[24px] font-[700] leading-[40px] bg-[#FB4A04] text-white'>{text}</button>
  )
}