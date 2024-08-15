import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(
    'http://localhost:8017/v1/boards/66bd9c7004a462504a65951c'
  )
  return response.data
}
