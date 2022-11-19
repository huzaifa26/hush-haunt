import LazyImage from "../General/LazyImage"

type Props={
  id:string,
  image:string,
  text:string,
  price:string,
  priceDescription: string | null,
  icon:string
}


export default function TicketCard({id,image,text,price,priceDescription,icon}: Props) {
  return (
    <div key={id} className='flex h-[135px] w-[42.305vw] xl:w-[41vw] lg:w-[41vw] md:w-[41vw] sm:w-[80vw] xsm:w-[90vw]'>
      {/* <img className='w-[13.314vw]' src={image} alt=''/> */}
      <LazyImage alt="" src={image} classes="13.314vw"/>
      <div className='pl-[1.15vw] flex-1 flex flex-col h-[100%] bg-[#fed4c3]'>
        <h3 className='mt-[13px] font-[400] leading-[33px] text-[20px] text-[#231414]'>{text}</h3>
        <h2 className='mt-[12px] font-[700] leading-[53px] text-[32px] text-[#231414]'>
          {price}
          {priceDescription !== null && 
            <span className='ml-[0.922vw] font-[400] leading-[33px] text-[20px] text-[#231414]'>{priceDescription}</span>
          }
        </h2>
      </div>
      <div className='flex justify-center items-center w-[4.43vw] bg-[#FB4A04]'>
        {/* <img src={icon} alt=''/> */}
        <LazyImage alt="" src={icon}/>

      </div>
    </div>
  )
}