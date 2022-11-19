import React from 'react'

type Props = {
    mainText: string,
    data: {
        image: string,
        imageWidth: string,
        text: string,
        description: string,
    }[]
}

export default function EventsCards({ mainText, data }: Props) {
    return (
        <div className='m-auto w-[86.1671469740634vw]'>
            <div className='flex justify-between'>
                <h3 className='font-[700] text-[32px] leading-[52.13px] text-[#473a3a]'>{mainText}</h3>
                <button className='w-[171px] h-[53px] border-2 border-[#FB4A04] font-[400] text-[24px] leading-[40px] text-[#473a3a]'>See More</button>
            </div>
            <div className='flex justify-between mt-[25px]'>
                {data.map((d,index) => {
                    return (
                        <div key={index}>
                            <div className='relative' style={{ width: d.imageWidth }}>
                                <img style={{ width: d.imageWidth }} src={d.image} alt='' />
                                <img className='absolute right-0 bottom-0' src='./heartIcon.png' alt=''></img>
                            </div>
                            <div>
                                <h3 className='w-[351px] font-[700] text-[20px] leading-[32.58px] text-[#473a3a]'>{d.text}</h3>
                                <p className='font-[400] text-[16px] leading-[33px] text-[#473a3a]'>{d.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}