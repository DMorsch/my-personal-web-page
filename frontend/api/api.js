import axios from 'axios'

const dev = {
  apiGateway: { URL: 'http://localhost:3000/' },
  environment: 'DEVELOPMENT',
}

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default axios.create({
  baseURL: dev.apiGateway.URL,
  headers: defaultHeaders,
})
