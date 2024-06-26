import React from 'react'
import RegisterHeader from 'src/components/RegisterHeader'
import Footer from 'src/components/Footer'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div className=''>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
