import Head from 'next/head'
import ChartComponent from '@/components/main/'
import SideBar from '@/components/sidebar'
import Card from '@/components/card'
import { Container, ContainerCard, Header } from '@/styles/style-index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zemo Bank - Relatório Pix</title>
        <meta
          property="og:viewport"
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1"
          link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
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
