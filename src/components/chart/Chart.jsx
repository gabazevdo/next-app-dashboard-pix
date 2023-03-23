import dynamic from 'next/dynamic'
import { ContainerChart } from './style'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Chart(props) {
  const series = [
    //   name: 'PRODUCT A',
    //   data: [13, 23, 20, 8, 13]
    // },
    // {
    //   name: 'PRODUCT B',
    //   data: [13, 23, 20, 8, 13]
    // },
    // {
    //   name: 'PRODUCT C',
    //   data: [11, 17, 15, 15, 21]
    // },
    // {
    //   name: 'PRODUCT D',
    //   data: [21, 7, 25, 13, 22]
    // }
  ]
  const options = {
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
      ]
    },
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    legend: {
      position: 'right',
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  }

  return (
    <>
      <ContainerChart>
        <ApexChart
          options={options}
          series={props.data}
          type="bar"
          height={350}
        />
      </ContainerChart>
    </>
  )
}
