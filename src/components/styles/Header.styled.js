import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`

  // NavBar
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:50px;

  & > h1 {
    font-size: 2.7rem;
    font-weight: 700;
    padding-bottom: 5px;
    /* font-style: italic; */
  }

  & > ul {}

  .header-text{
    max-width: 100%;
    height: auto;
    text-align:justify;
  }
/* 
  .header-text:hover {
    font-size:15px;
    cursor:"pointer";
    opacity: 1;
    transform: scale(1.5);
    box-shadow: 0 0 20px #ff0099;
  } */
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    .header-text{
      text-align:justify;
    }
  }
  `;

  // Navigation Links
  // export const NavLink = styled.a`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   font-size: 1.5rem;
  //   /* line-height: 32px; */
  //   color: #ff0099;
  //   transition: 0.4s ease;
  //   &:hover {
  //     color: #fff;
  //     text-shadow: 0 0 10px #ff0099;
  //     opacity: 1;
  //     cursor: pointer;
  // }
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   flex-direction: column;
  // }
  // `;

// export const Logo = styled.img`
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     margin-bottom: 40px;
//     border-radius: 7px;
//   }
// `

// Profile Picture
export const Image = styled.img`
  width: 360px;
  margin-left: 40px;
  border-radius: 7px;
  margin-top: 7px;
  animation: slideLeft 3s ease forwards;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
  
  /* KEYFRAME ANIMATION DETAILS */
  @keyframes slideLeft {
    0% {
      transform: translateX(200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  };

`
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  `;
