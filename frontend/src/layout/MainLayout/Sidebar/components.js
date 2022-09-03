import styled from "styled-components";

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