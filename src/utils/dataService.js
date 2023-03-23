import { api } from '@/api'

export async function getMetrics(start, end, time = '1') {
  return api.get(`/metrics?start_date=${start}&end_date=${end}&time=${time}`)
}