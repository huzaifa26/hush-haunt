import React from 'react'
import Slider from "react-slick";
import { useRef } from 'react';

export default function Crousal({ crousalData }: any) {
    const slider1Arrow: any = useRef();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    // var settings1 = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: false
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: false
    //             }
    //         }
    //     ]
    // };

    return (
        // <Slider {...settings} className='flex'>
            
        //     <div>
        //     <img className='max-w-[503px]' key={crousalData[0].id} src={"./Gallery1.png"} alt=''/>
        //     </div>

            
        // </Slider>
        <>
        <Slider {...settings}>
          {crousalData.map((data:any)=>{
                return (
                <div>
                    <img className='max-w-[503px]' key={data.id} src={data.image} alt=''/>
                </div>)
            })}
        </Slider>
      </>
    )
}