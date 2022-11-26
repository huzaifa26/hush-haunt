import React from 'react'
import {motion} from "framer-motion"

type Props = {
    width:string,
    height:string,
    text:string,
    style?:any,
    whileHover?:any,
    initial?:any,
    classes?:string,
    onClick?:any
}

export default function Button({width,height,text,style, initial, whileHover,classes,onClick}: Props) {
  const classes1='rounded-[20px] text-[clamp(16px,1.38328530259366vw,24px)] font-[700] leading-[40px] bg-[#FB4A04] text-white'+" "+classes;
  console.log(classes1)
  return (
    <motion.button onClick={onClick} initial={initial} whileHover={whileHover} style={{width:width,height:height, ...style}} className={classes1}>{text}</motion.button>
  )
}