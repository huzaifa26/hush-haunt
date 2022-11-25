import { motion } from "framer-motion"

type Props = {
    showFooterHeaders?: boolean
}

export default function Footer({ showFooterHeaders = true }: Props) {
    return (
        <footer className={showFooterHeaders ? "flex flex-col justify-between w-[100%] bg-[#FB4A04] text-[#ffffff] xsm:h-auto sm:h-auto h-auto" : "flex flex-col justify-between w-[100%] bg-[#FB4A04] text-[#ffffff] xsm:h-auto"}>
            {
                showFooterHeaders &&
                <motion.div className='w-[90%] mb-[77px] m-auto flex justify-around mt-[55px] xsm:flex-col flex-wrap xsm:gap-[40px] sm:gap-[40px]'>
                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] xsm:mb-[15px]'>Use Site</h3>
                        <motion.li whileHover={{color:"#473a3a"}} className=''>How It Works</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode Boost</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Pricing</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Content Standards</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode Mobile Ticket App</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode Check-In App</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode App Marketplace</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>COVID-19 (Coronavirus) Resources</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>FAQs</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Sitemap</motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Plan Events</h3>
                        <motion.li whileHover={{color:"#473a3a"}}>Sell Tickets Onmotion.line</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Event Registration Software</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line RSVP</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Virtual Events Platform</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Event Planning</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Event Payment System</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Nonprofits & Fundraisers Events</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Event Marketing</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Grow your Business</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Party Planning</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}></motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Find Events</h3>
                        <motion.li whileHover={{color:"#473a3a"}}>Virtual Events</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Webinars</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Classes</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Yoga</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Virtual Runs</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Zumba Classes</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Virtual Conferences</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Seminars</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Onmotion.line Speed Dating</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Virtual Wine Tasting</motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px]'>Connect With Us</h3>
                        <motion.li whileHover={{color:"#473a3a"}}>Contact Support</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Twitter</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Facebook</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>motion.linkedIn</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Instagram</motion.li>
                    </ul>
                </motion.div>
            }

            <div className='mb-[31px] m-auto flex flex-col items-center mt-[31px]'>
                <div className="w-[58.44380403458213vw] xsm:min-w-[95vw] flex gap-[5px] flex-wrap justify-center">
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">About</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Blog</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">HelpCareers</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Press</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Investors</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Security</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Developers</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Terms</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Privacy</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">CA Privacy</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Notice</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Accessibimotion.lity</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">Cookies</motion.p>
                    <div>|</div>
                    <motion.p whileHover={{color:"#473a3a"}} className="cursor-pointer">About</motion.p>
                </div>
                <motion.p whileHover={{color:"#473a3a"}} className="mt-[22px]">© 2022 Partymode</motion.p>
            </div>
        </footer>
    )
}