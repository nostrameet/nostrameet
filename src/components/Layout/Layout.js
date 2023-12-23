import React from 'react'
import CustomNavBar from 'components/CustomNavBar/CustomNavBar'

export default function Layout({ children }) {
  return (
    <>
      <CustomNavBar />
      <main>{children}</main>
    </>
  )
}
