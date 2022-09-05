// project imports
import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'
import AuthService from '@services/AuthService'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './components'
import { SET_MENU } from '@store/actions'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!AuthService.isLoggedIn()) {
      navigate('auth/login')
    }
  }, [])

  const leftDrawerOpened = useSelector(state => state.customization.opened)
  const dispatch = useDispatch()
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened })
  }

  return (
    <MainContainer>
      <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />

      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />
      
      <Main open={leftDrawerOpened} />

      <Footer />
    </MainContainer>
  )
}

export default MainLayout
