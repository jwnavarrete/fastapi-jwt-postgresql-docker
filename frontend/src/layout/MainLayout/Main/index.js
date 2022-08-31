import React from 'react'
import { Outlet } from 'react-router-dom';

const index = (children) => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default index
