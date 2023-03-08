import dynamic from 'next/dynamic'
import { options, series } from '@/mocks/data'
import { ContainerChart } from './style'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Chart() {
  return (
    <>
      <ContainerChart>
        <ApexChart options={options} series={series} type="bar" height={350} />
      </ContainerChart>
    </>
  )
}
