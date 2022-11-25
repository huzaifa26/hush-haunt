import React, { useState } from 'react'

type Props = {}

export default function TableRow({ data }: any) {
    const [contextMenu, setContextMenu] = useState<boolean>(false);
    return (
        <tr className='py-[15px]'>
            <td className='w-[15%]'>{data.events[0]} <span>{data.events[1]}</span></td>
            <td className='w-[40%]'><img src={data.img} alt='' /></td>
            <td>{data.sold}</td>
            <td>{data.gross}</td>
            <td>{data.status}</td>
            <td className='relative'>
                <div className='flex flex-col gap-[5px] justify-center items-start relative z-[10]' onClick={() => setContextMenu(!contextMenu)}>
                    <div className='min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full'></div>
                    <div className='min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full'></div>
                    <div className='min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full'></div>
                </div>
                {contextMenu &&
                    <div style={{boxShadow:"1px 2px 8px #00000030"}} className='absolute bg-white z-[2000]  w-[165px] h-[139px] right-[20%] '>
                        <div className='flex flex-col justify-around m-auto w-[80%] h-full'>
                            <p className='font-[400] text-[16px] leading-[26px] text-[black]'>Copy Event url</p>
                            <p className='font-[400] text-[16px] leading-[26px] text-[black]'>View</p>
                            <p className='font-[400] text-[16px] leading-[26px] text-[black]'>Edit</p>
                        </div>
                    </div>
                }
            </td>
        </tr>
    )
}