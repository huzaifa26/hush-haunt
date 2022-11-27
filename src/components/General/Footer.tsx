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
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode vibe check</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Pricing</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Content standards</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode mobile ticket</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode check-in</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Partymode marketplace</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>FAQ</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Sitemap</motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Plan Events</h3>
                        <motion.li whileHover={{color:"#473a3a"}}>Sell tickets online</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Live streaming events</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Create event</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Event payment</motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px] '>Find Events</h3>
                        <motion.li whileHover={{color:"#473a3a"}}>Live streaming</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Online events</motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}>Find promoter - creators</motion.li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] mb-[25px]'>Connect With Us</h3>
                        <motion.li whileHover={{color:"#473a3a"}}><a target={"_blank"}>Contact support</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a href="https://fb.watch/gJthIVVA0p/" target={"_blank"}>Facebook</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a href="https://www.instagram.com/reel/Ckt0HO0jwUt/?igshid=YmMyMTA2M2Y=" target={"_blank"}>Instagram</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a target={"_blank"}>LinkedIn</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a href="https://vm.tiktok.com/ZMFPkXUYS/" target={"_blank"}>TikTok</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a href="https://twitter.com/partymode_/status/1579279888879878147?s=12&t=-jK89kyXLwS-ennKAld_Sw" target={"_blank"}>Twitter</a></motion.li>
                        <motion.li whileHover={{color:"#473a3a"}}><a href="https://open.spotify.com/track/3UGNdLrhhsK0SY9gNqe8TT?si=RBDLUrG-R8CqHlZrz865rw" target={"_blank"}>Podcast</a></motion.li>
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