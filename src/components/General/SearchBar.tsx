import React from 'react'

type Props = {
  style?:any,
  text?:string
}

export default function SearchBar({style,text="Search Events"}: Props) {
  return (
    <input style={style} className='inputBackground indent-[5.53vw] xsm:pl-[15px] w-[35.04vw] h-[54px] rounded-[20px] border-[3px] border-[#f6ccbb] xsm:w-full' placeholder={text}></input>
  )
}