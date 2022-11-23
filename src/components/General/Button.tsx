import React from 'react'
import {motion} from "framer-motion"

type Props = {
    width:string,
    height:string,
    text:string,
    style?:any,
    whileHover?:any,
    initial?:any,
    classes?:string
}

export default function Button({width,height,text,style, initial, whileHover,classes}: Props) {
  return (
    <motion.button initial={initial} whileHover={whileHover} style={{width:width,height:height, ...style}} className={'rounded-[20px] text-[clamp(16px,1.38328530259366vw,24px)] font-[700] leading-[40px] bg-[#FB4A04] text-white '+{classes}}>{text}</motion.button>
  )
}