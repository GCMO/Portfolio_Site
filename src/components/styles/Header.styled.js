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
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 10px;
    /* font-style: italic; */
  }

  & > ul {}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  `;
