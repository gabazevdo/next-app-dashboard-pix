import { ContainerCard } from './style'

export default function Card(props) {
  return (
    <>
      <ContainerCard>
        <p> {props.total} </p>
      </ContainerCard>
    </>
  )
}
