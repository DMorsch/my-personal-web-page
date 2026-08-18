import axios from 'axios'

// In production the app is served by nginx (see frontend/nginx.conf), which
// proxies API routes to the backend container on the same origin. In local
// dev, Vite serves the frontend on :5173 and Rails runs separately on :3000.
const baseURL = import.meta.env.PROD ? '/' : 'http://localhost:3000/'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default axios.create({
  baseURL,
  headers: defaultHeaders,
})
