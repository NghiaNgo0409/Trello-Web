// export const API_ROOT = 'http://localhost:8017'
export const API_ROOT = 'https://trello-api-admy.onrender.com'

let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
}
