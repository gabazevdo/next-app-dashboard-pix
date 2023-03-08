import styled from "styled-components";


export const ContainerCard = styled.div`
  height: 10rem;
  width: 20rem;
  border-radius: 1.5rem;
  background-color: ${({theme})=> theme.colors.primary['500']};

  display:flex;
  align-items: center;
  justify-content: center;

  box-shadow: 1px 5px 10px ${({ theme }) => theme.colors.background.overlay};

  color: ${({theme})=> theme.colors.text.light};

  p{
    font-size: 1.8rem;
    font-weight: 700;
  }
`