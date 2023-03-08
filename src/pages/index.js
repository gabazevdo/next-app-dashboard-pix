import Head from 'next/head'
import ChartComponent from '@/components/chart/Chart'
import SideBar from '@/components/sidebar'
import Card from '@/components/card'
import { Container, ContainerCard, Header } from '@/styles/style-index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zemo Bank - Relatório Pix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>
      </Head>

      <Header />
      <SideBar />
      <Container>
        <ContainerCard>
          <Card total={'Info'} />
          <Card total={'Info'} />
          <Card total={'Info'} />
        </ContainerCard>
        <div style={{ marginLeft: '30rem' }}>
          <ChartComponent />
        </div>
      </Container>
    </>
  )
}
