import styled from "styled-components";

export const HeaderContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 9vh;
    padding: 0 60px 0 60px;
    z-index: 999;
    background: transparent;
    transition: all ease 0.5s;
   }
   
   header.black-header {
    background-color: #111;
  }

  .header--logo img {
    width: 90px;
  }
  .header--iconPerfil img {
    width: 40px;
    border-radius: 10px;
    transition: all ease 0.5s;
  }
  .header--iconPerfil img:hover{
    transform: scale(1.2);
  }
`;
