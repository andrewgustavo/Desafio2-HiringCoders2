import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: #fff;

  .logo{
    object-fit: contain;
    object-position: center;
    height: 50px;
    display: block;
  }

  & nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    
    & a{
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  

  @media(max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;
  }
`