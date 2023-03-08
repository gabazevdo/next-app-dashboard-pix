import ChartComponent from '@/components/chart/Chart'
import Head from 'next/head'

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
      <h1>teste</h1>
      <ChartComponent />
    </>
  )
}
