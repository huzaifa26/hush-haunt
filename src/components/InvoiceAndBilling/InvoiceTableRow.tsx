import React from 'react'

type Props = {
    data: {
        id: number,
        no: string,
        date: string,
        event: string,
        ticketPrice: string,
        qtySold: string,
        ticketSales: string,
        taxCollected: string,
        status: "Pending" | "Cleared"
    },
    ShowModalhandler:any
}

export default function InvoiceTableRow({ data,ShowModalhandler }: Props) {
    console.log(data);
    return (
        <tr key={data.id} className='py-[15px] text-center  '>
            <td className='py-[17px] '>{data.no}</td>
            <td className='py-[17px] '>{data.date}</td>
            <td className='py-[17px] '>{data.event}</td>
            <td className='py-[17px] '>{data.ticketPrice}</td>
            <td className='py-[17px] '>{data.qtySold}</td>
            <td className='py-[17px] '>{data.ticketSales}</td>
            <td className='py-[17px] '>{data.taxCollected}</td>
            <td style={data.status==="Pending"?{color:"#F71111"}:{color:"#35BB13D4"}} className='py-[17px] flex justify-center items-center'><p onClick={()=>{data.status === "Pending" && ShowModalhandler()}} className='w-[88px]' style={data.status==="Pending"?{border:"1px solid #F71111",borderRadius:"20px"}:{}}>{data.status}</p></td>
        </tr>
    )
}