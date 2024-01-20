import React from 'react'
import CustomNavBar from 'components/CustomNavBar/CustomNavBar'
import { Panel } from 'components/Panel/Panel'

export default function Layout({ children }) {
  return (
    <>
      <CustomNavBar />
      <main>{children}</main>
      <Panel id='publish' />
    </>
  )
}
