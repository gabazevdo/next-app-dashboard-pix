import styled from 'styled-components'

export const Container = styled.aside`
  height: 80vh;
  width: 20rem;
  display: flex;
  margin: 5rem ;
  padding: .5rem;
  justify-content: center;
  
  position:absolute;
  top:0;
  z-index: 10;

  
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.background.box};
  box-shadow: 1px 5px 20px ${({ theme }) => theme.colors.background.overlay};
  border-radius: 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.main};
`
