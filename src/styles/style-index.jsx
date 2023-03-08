import styled from 'styled-components'

export const Container = styled.body`
  height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.main};
`

export const Header = styled.header`
  height: 10rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.main};

  z-index: -1;
`

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;
  margin: 2.5rem 0 0 30rem;
`
