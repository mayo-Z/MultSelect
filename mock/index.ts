import { MockMethod } from 'vite-plugin-mock'
import multSelect from './data/multSelect'


export default [
  {
    url: "/api/multSelect",
    method: 'get',
    response: () => {
      return {
        code: 200,
        result:multSelect
      }
    },
  },

] as MockMethod[]