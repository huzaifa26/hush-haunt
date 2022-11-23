import React from 'react'

type Props = {
  style?:any
}

export default function SearchBar({style}: Props) {
  return (
    <input style={style} className='inputBackground indent-[5.53vw] xsm:pl-[15px] w-[35.04vw] h-[54px] rounded-[20px] border-[3px] border-[#f6ccbb] xsm:w-full' placeholder='Search Events'></input>
  )
}