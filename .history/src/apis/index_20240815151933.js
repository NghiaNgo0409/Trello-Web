import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  console.log(API_ROOT)
  const response = await axios.get(`http://localhost:8017/v1/boards/${boardId}`)
  return response.data
}
