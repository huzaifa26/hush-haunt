import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
    alt?: string,
    src: string,
    width?: string,
    style?:any
    classes?:string
}

export default function LazyImage(props: Props) {
    return (
        <LazyLoadImage
            alt={props.alt}
            src={props.src}
            style={{width:props.width,...props.style}}
            className={props.classes}
        />
    )
}
