import styled from "styled-components";


export const ContainerChart = styled.div`
  width: 50%;
  margin-top: 4rem;
  background-color: white;
  padding: 1rem;
  border-radius: 1.5rem;

  box-shadow: 1px 5px 10px ${({ theme }) => theme.colors.background.overlay};
`