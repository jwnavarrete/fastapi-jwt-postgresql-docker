import styled from 'styled-components'

export const Header = styled.header`
  grid-area: header;
  background-color: #ffffff;
  margin: 15px 15px 0px 15px;
  display: flex;
  flex-direction: row;
`

export const Navbar = styled.nav`
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
`

export const Li = styled.li`
  padding: 15px;
`

export const Anchor = styled.a`
  width: 50px;
  text-decoration: none;
`

export const Row = styled.div`
  flex: 1;
`
