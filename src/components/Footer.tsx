import React from 'react'

type Props = {
    showFooterHeaders?: boolean
}

export default function Footer({ showFooterHeaders = true }: Props) {
    return (
        <footer style={showFooterHeaders ? {height:"595px"}:{height:"118px"}} className='flex flex-col justify-between w-[100%] bg-[#FB4A04] text-[#ffffff]'>
            {
                showFooterHeaders &&
                <div className='w-[90%] m-auto flex justify-around mt-[55px]'>
                    <ul>
                        <h3 className='font-[700] text-[24px] leading-[40px] mb-[25px] '>Use Site</h3>
                        <li className=''>How It Works</li>
                        <li>Partymode Boost</li>
                        <li>Pricing</li>
                        <li>Content Standards</li>
                        <li>Partymode Mobile Ticket App</li>
                        <li>Partymode Check-In App</li>
                        <li>Partymode App Marketplace</li>
                        <li>COVID-19 (Coronavirus) Resources</li>
                        <li>FAQs</li>
                        <li>Sitemap</li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[24px] leading-[40px] mb-[25px] '>Plan Events</h3>
                        <li>Sell Tickets Online</li>
                        <li>Event Registration Software</li>
                        <li>Online RSVP</li>
                        <li>Virtual Events Platform</li>
                        <li>Event Planning</li>
                        <li>Event Payment System</li>
                        <li>Nonprofits & Fundraisers Events</li>
                        <li>Event Marketing</li>
                        <li>Grow your Business</li>
                        <li>Party Planning</li>
                        <li></li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[24px] leading-[40px] mb-[25px] '>Find Events</h3>
                        <li>Virtual Events</li>
                        <li>Online Webinars</li>
                        <li>Online Classes</li>
                        <li>Online Yoga</li>
                        <li>Virtual Runs</li>
                        <li>Online Zumba Classes</li>
                        <li>Virtual Conferences</li>
                        <li>Online Seminars</li>
                        <li>Online Speed Dating</li>
                        <li>Virtual Wine Tasting</li>
                    </ul>

                    <ul>
                        <h3 className='font-[700] text-[24px] leading-[40px] mb-[25px]'>Connect With Us</h3>
                        <li>Contact Support</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            }

            <div className='mb-[31px] m-auto flex flex-col items-center mt-[27px]'>
                <p className='mb-[22px]'>About | Blog | HelpCareers | Press | Investors | Security | Developers | Terms | Privacy | CA Privacy | Notice | Accessibility | Cookies</p>
                <p>© 2022 Partymode</p>
            </div>
        </footer>
    )
}