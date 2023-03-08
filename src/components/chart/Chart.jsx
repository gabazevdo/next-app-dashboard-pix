import dynamic from 'next/dynamic'
import { options, series } from '@/mocks/data'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Chart() {
  return (
    <>
      <ApexChart options={options} series={series} type="bar" height={350} />
    </>
  )
}
