import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
  margin: 5px 5px 20px 0;
  padding: 15px;
  flex-direction: ${({ layout }) => layout || 'row'}; // row or row-reverse to define img position

  img {
    width: 90%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
