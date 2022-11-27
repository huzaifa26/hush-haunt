import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import LazyImage from './LazyImage'
import SearchBar from './SearchBar'
import {useLocation} from "react-router-dom"

type Props = {
    children: any
}

let drawer = [
    {
        id: 1,
        iconWhite: "./drawerDashboardWhite.svg",
        iconOrange: "./drawercreatorDashboard.svg",
        route: "/creator-dashboard"
    },
    {
        id: 2,
        iconWhite: "./drawerEventDashboard.svg",
        iconOrange: "./drawerEventDashboardOrange.svg",
        route: "/event-dashboard"
    },
    {
        id: 3,
        iconWhite: "./drawerReportAnalysis.svg",
        iconOrange: "./drawerReportAnalysisOrange.svg",
        route: "/report-analysis"
    },
    {
        id: 4,
        iconWhite: "./drawerInvoiceAndBilling.svg",
        iconOrange: "./drawerInvoiceAndBillingOrange.svg",
        route: "/invoice-and-billing"
    },
    {
        id: 5,
        icon: "./",
        iconWhite: "./drawerSetting.svg",
        iconOrange: "./drawerSettingOrange.svg",
        route: "/setting"
    },
]

export default function Layout({ children }: Props) {
    const location=useLocation();
    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    <LazyImage alt="" src={"/Logo.png"} classes="w-[80px] xsm:min-w-[57px] sm:min-w-[57px]" />
                    <div className='xsm:hidden '>
                    <SearchBar whileHover={{scale:1.03}} />
                    </div>
                </div>

                <ul className='text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[31px] mr-[7.37vw] items-center border-[1px] px-[21px] py-[6px] rounded-full border-[#473a3a] '>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center ml-[20px]'>partymode</p>
                        <img className='ml-[41px]' src='./dropdown.svg' alt=''/>
                    </li>
                </ul>
            </nav>
            <div className='flex'>
                <div className='w-[78px] xsm:w-[57px] sm:w-[57px] bg-[#FB4A04] h-[1015px] flex flex-col items-end pt-[65px] gap-[12px]'>
                    {drawer.map((item) => {
                        return (
                            <NavLink to={item.route} end>
                                <div style={location.pathname.includes( item.route)?{background:"#ffffff"}:{background:"#FB4A04"}} key={item.id} className='w-[57px] h-[61px] flex justify-center items-center'>
                                    <img src={location.pathname.includes( item.route)?item.iconOrange:item.iconWhite} alt="" />
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                <div className='flex-1 flex'>
                    {children}
                </div>
            </div>
        </div>
    )
}