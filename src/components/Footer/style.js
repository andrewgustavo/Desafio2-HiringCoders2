import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 10px 0;
  margin-top: 75px;


  & nav{
    display: flex;
    gap: 10px;


    & a{
      font-size: 1.5rem;
    }
  }

  .copyright{
    font-size: .750rem;
  }
  
  @media(max-width: 1200px){
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    text-align: center;
    min-height: 20px;
    margin-top: 10px;
  }
`