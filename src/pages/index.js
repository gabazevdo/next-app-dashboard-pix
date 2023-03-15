import Head from 'next/head'
import ChartComponent from '@/components/chart/Chart'
import SideBar from '@/components/sidebar'
import Card from '@/components/card'
import { Container, ContainerCard, Header } from '@/styles/style-index'

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <Container>
        <ContainerCard>
          <Card total={'Transações'} />
          <Card total={'Movimentações'} />
        </ContainerCard>
        <div style={{ marginLeft: '30rem' }}>
          <ChartComponent />
        </div>
      </Container>
    </>
  )
}
