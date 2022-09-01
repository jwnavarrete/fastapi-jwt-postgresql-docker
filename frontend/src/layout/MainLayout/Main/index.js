import React from 'react'
import { Outlet } from 'react-router-dom';
import {Main} from './components';

const index = (children) => {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}

export default index
