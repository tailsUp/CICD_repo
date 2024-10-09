import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/login'
//const baseUrl2 = 'https://cicd-repo.onrender.com/:3001/api/login'
const baseUrl3 = 'https://cicd-repo.onrender.com/api/login'

const login = async credentials => {
  console.log('loginService: ', credentials)
  const response = await axios.post(baseUrl3, credentials).catch(error => {
    console.log('Error in logging in. ' ,error)
  })
  return response.data
}

export default { login }