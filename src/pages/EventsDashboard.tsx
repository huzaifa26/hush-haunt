import { Link, NavLink, Outlet } from 'react-router-dom'
import Layout from '../components/General/Layout'

type Props = {}

export default function EventsDashboard({ }: Props) {
    return (
        <Layout>
            <div className='w-full pt-[65px] ml-[9.682997118155619vw] xsm:ml-[4vw] sm:ml-[6vw] md:ml-[7vw]'>
                <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] ml-[10px]'>Events</h1>

                <div className='transition-all flex gap-[20px] mt-[29px] mb-[84px]'>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/event-dashboard"}>
                        <button className='w-[69.03px] h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Events</button>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/event-dashboard/order"}>
                        <button className='w-[69.03px] h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Orders</button>
                    </NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </Layout>
    )
}