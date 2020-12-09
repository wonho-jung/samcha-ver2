import styled from "styled-components";
import sidbarBg from "../../assets/sidebarBg3.jpg";
export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${sidbarBg});
  background-size: contain;
  background-position: center;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
