import axios from '@/utils/axios'

export function getIpInfo (ip: string) {
  return axios.get('/api/ip', {
    params: {
      ip,
      type: 'b'
    }
  })
}
