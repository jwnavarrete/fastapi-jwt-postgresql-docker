import styled from "styled-components";
// import  from 'styled-components'

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: #ffffff;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Navbar_Header = styled.div`
  padding: 0.35rem 1rem 0.3rem 1.64rem;
  width: 260px;
  height: 4.45rem;
  position: relative;
`;

export const Navbar_Nav = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  -webkit-box-orient: horizontal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
`;

export const Nav_Item = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;

  ${(props) => props.mrauto && "margin-right: auto!important;"}
`;

export const Navbar_Brand = styled.a`
  margin-top: 1.35rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: inherit;
  font-size: 2rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const Brand_Logo = styled.span`
  img {
    max-width: 36px;
  }
`;

export const Brand_Text = styled.h2`
  -webkit-animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal
    forwards;
  animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards;
  padding-left: 1rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.palette.error.dark};
  font-weight: 600;
  letter-spacing: 0.01rem;
  font-size: 1.45rem;
`;

export const Modern_Nav_Toggle = styled.a`
  -webkit-animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal
    forwards;
  animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards;
  padding: 0;
  margin: 1.700rem 0;
  display: block;
  color: ${(props) => props.theme.palette.error.dark};
`;
// modern-nav-toggle
