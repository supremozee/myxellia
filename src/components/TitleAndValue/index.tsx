import React from 'react'

interface TitleAndValueProps {
    title:string;
    value:string | number
}
const TitleAndValue = ({title, value}:TitleAndValueProps) => {
  return (
    <div className='flex flex-col gap-y-[10px]'>
        <h6 className='text-[14px] font-medium text-[#525252]'>{title}</h6>
        <p className='text-[24px]  font-[600] text-[#141414]'>{value}</p>
    </div>
  )
}

export default TitleAndValue