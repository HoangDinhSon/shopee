import React from 'react'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return <div className='bg-red-500'>{children}</div>
}
