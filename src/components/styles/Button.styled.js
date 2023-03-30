import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 10px 40px;
  margin-left: 20px;
  background-color: ${({ bg }) => bg || '#fff'}; // these lines allow for inline changes and if not defined will default to white
  color: ${({ color }) => color || '#333'};
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(0.98);
    box-shadow: 0 0 20px #ff0099;
  }
`
 