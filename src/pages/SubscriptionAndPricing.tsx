import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import FAQ from '../components/SubscriptionAndPricing/FAQ'

type Props = {}

const faqData = [
    {
        id: 1,
        text: 'Can I change my package?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 2,
        text: 'Does Partymode have a free option?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 3,
        text: 'Can I change my package?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 4,
        text: 'What is a "ticket type"?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 5,
        text: 'What are ticketing and registration "essentials"?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 6,
        text: 'Do packages and prices differ by location or currency?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 7,
        text: "What if I don't want to list my event on partymode and partner sites?",
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
]

export default function SubscriptionAndPricing({ }: Props) {
    return (
        <main>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw]'>
                    {/* <img className='ml-[8px]' src='./Logo.png' alt='' /> */}
                    <LazyImage alt="" src={"./Logo.png"} classes='ml-[8px]' />
                    <SearchBar />
                </div>
                <ul className='text-[#473a3a] text-[16px] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
                    <Link to="/events"><li>Events</li></Link>
                    <li>Livestreams</li>
                    <li>Help</li>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/signup"><li className='text-[#FB4A04]'>Sign Up</li></Link>
                </ul>
            </nav>

            <section className='w-full h-[1237px] bg-[#ffe7de]'>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center pt-[189px]'>
                        <LazyImage alt="" src={"./SAdesign.png"} classes='relative top-[35%] left-[50%]' />
                        <h1 className='font-[700] text-[48px] leading-[78px] text-[#473a3a] relative z-20'>Our Membership Pricing Plan</h1>
                        <LazyImage alt="" src={"./SAcircle.png"} classes='relative top-[-10%] left-[-30%] z-10' />
                    </div>
                    <p className='h-[86px] font-[400] text-[24px] leading-[39.09px] text-[#473a3a] w-[33.487031700288185vw] text-center mt-[41px]'>We are an industry leading company that values honesty,intergrity and efficiency</p>
                </div>

                <div className='flex justify-between items-center w-[86vw] m-auto mt-[0px]'>
                    <div className='w-[27.838616714697405vw] h-[582px] bg-white rounded-tr-[50px] rounded-br-[50px] overflow-hidden'>
                        <div className='w-full h-[109px] bg-[#473a3a] flex justify-center items-center'>
                            <div className='relative flex items-center'>
                                <img className='absolute left-[-6%] top-[5%] z-10' src='./square.png' />
                                <h2 className='relative font-[400] text-[32px] leading-[52px] text-[#fff] z-20'>Starter Plan</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[400] text-[36px] leading-[58px] text-[#473a3a] mt-[19px] mb-[35px]'>Free</h3>
                            <Button width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ border: "2px solid #473a3a", background: "#fff", color: "#473a3a", borderRadius: "0px", marginBottom: "19px" }} />

                            <div className='flex flex-col gap-[6px]'>
                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>One ticket type (ex. "General Admission")</p>
                                </div>

                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Ticketing & registration essentials</p>
                                </div>

                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Organizer mobile app</p>
                                </div>

                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>One ticket type (ex. "General Admission")</p>
                                </div>

                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Signup for free</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[27.738616714697405vw] h-[724px] bg-white rounded-[50px] overflow-hidden mt-[50px]'>
                        <div className='w-full h-[109px] bg-[#FB4A04]'>
                            <div className='w-full h-[109px] bg-[#FB4A04] flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center gap-[4px]'>
                                    <div className='min-w-[108px] min-h-[3px] bg-[#fff]'></div>
                                    <h2 className='font-[400] text-[32px] leading-[52px] text-[#fff]'>Membership Plan</h2>
                                    <div className='min-w-[108px] min-h-[3px] bg-[#fff]'></div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h3 className='font-[400] text-[36px] leading-[58px] text-[#473a3a] mt-[25px] mb-[33px]'>$24.99per/month</h3>
                            <Button width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ background: "#FB4A04", color: "#fff", borderRadius: "0px", marginBottom: "19px" }} />

                            <div className='flex flex-col gap-[6px]'>
                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Everything in Starter plan, plus</p>
                                </div>

                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Early Bird acccess</p>
                                </div>

                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Discounts on tickets price</p>
                                </div>

                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Early releases and gated content.</p>
                                </div>

                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Access to live streaming for all events</p>
                                </div>

                                <div className='flex items-center gap-[15px] h-[43px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Private shows booking with preferred creators</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[27.838616714697405vw] h-[582px] bg-white rounded-tl-[50px] rounded-bl-[50px] overflow-hidden'>
                        <div className='w-full h-[109px] bg-[#473a3a] flex justify-center items-center'>
                            <div className='relative flex items-center'>
                                <img className='absolute left-[-14%] top-[-15%] z-10' src='./Polygon 2.svg' />
                                <h2 className='relative font-[400] text-[32px] leading-[52px] text-[#fff] z-20'>Creators Plan</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-[400] text-[36px] leading-[58px] text-[#473a3a] mt-[19px] mb-[35px]'>$2.5%per/ticket</h3>
                            <Button width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ border: "2px solid #473a3a", background: "#fff", color: "#473a3a", borderRadius: "0px", marginBottom: "24px" }} />

                            <div className='flex flex-col gap-[6px]'>
                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Artist and promoters will be able to advertise online for free</p>
                                </div>

                                <div className='flex items-center gap-[15px]'>
                                    <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                    <p className='font-[400] text-[20px] w-[23.054755043227665vw] leading-[32px] text-[#473a3a] '>Partymode will take a ticket fee of $2.5% for each ticket.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[86vw] flex m-auto mt-[97px]'>
                <div className='flex-2'>
                    <h2 className='font-[700] text-[36px] leading-[58px] text-[#473a3a]'>FAQs</h2>
                    <p className='font-[400] text-[16px] leading-[26px] text-[#473a3a] mt-[27px] mb-[112px]'>Everything you need to know about Party mode.</p>
                    <img src='./rafiki.png' alt=''></img>
                </div>
                <div className='flex-1'>
                    {faqData.map((data) => {
                        return (
                            <FAQ text={data.text} description={data.description} />
                        )
                    })}
                </div>
            </section>
            <div className='mt-[234px]'>
                <Footer />
            </div>
        </main>
    )
}