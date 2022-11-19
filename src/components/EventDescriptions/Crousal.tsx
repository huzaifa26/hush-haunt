import React from 'react'
import Slider from "react-slick";
import { useRef } from 'react';
import LazyImage from '../General/LazyImage';

type Props={
  crousalData:{
    id:string,
    image:string
  }[],
  settings:{
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number
  },
  maxWidth:string,
  width:string,
}

export default function Crousal({ crousalData, settings,maxWidth,width }: Props) {
    const slider1Arrow: any = useRef();

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
        <>
        <Slider {...settings}>
          {crousalData.map((data:any)=>{
                return (
                <div key={data.id}>
                    {/* <img style={{maxWidth:maxWidth,width:width}} key={data.id} src={data.image} alt=''/> */}
                    <LazyImage alt="" src={data.image} style={{maxWidth:maxWidth,width:width}}/>
                </div>)
            })}
        </Slider>
      </>
    )
}