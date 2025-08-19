import React from 'react'

interface ContainerProps {
    children:React.ReactNode
    className?:string
}
const Container = ({children, className}:ContainerProps) => {
  return (
    <div className={`mx-[78px] max-width-[1284px] ${className}`}>
        {children}
    </div>
  )
}

export default Container