import React from 'react'
import Button from '../General/Button'
import InvoiceTableRow from '../InvoiceAndBilling/InvoiceTableRow'

type Props = {}

let data1:any[] = [
    {
        id:1,
        appName:"mailer",
        description:"Marketing",
        installed:"2 weeks",
        delete:"./trash-2.svg"
    },
    {
        id:1,
        appName:"mailer",
        description:"Marketing",
        installed:"2 weeks",
        delete:"./trash-2.svg"
    },
]

export default function AppInstallation({ }: Props) {
    return (
        <div className='w-[78.04034582132564vw] flex flex-col justify-center items-center'>
            <table className="transition-all table-fixed w-full mt-[43px] relative z-10 mb-[50px]">
                <thead className='bg-[#fed4c3]'>
                    <tr className=''>
                        <th className='py-[17px] pl-[1%] text-left w-[50%]'>App Name</th>
                        <th className='py-[17px]'>Description</th>
                        <th className='py-[17px]'>Installed</th>
                        <th className='py-[17px]'>Actions</th>
                    </tr>
                </thead>
                <tbody className='w-[78.32853025936599vw]'>
                    {data1.length > 0 && data1.map((d: any) => {
                        return (
                            <tr key={d.id} className='py-[15px] text-center  '>
                                <td className='py-[17px] pl-[1%] text-left w-[50%]'>{d.appName}</td>
                                <td className='py-[17px] '>{d.description}</td>
                                <td className='py-[17px] '>{d.installed}</td>
                                <td className='py-[17px] '>{d.delete}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <Button width="255px" height='47px' text="Browse Apps" style={{ borderRadius: "0px", fontSize: "20px", marginTop:"22px",alignSelf:"flex-end",marginTop:"150px" }} />
        </div>
    )
}