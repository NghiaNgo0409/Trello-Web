import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '../BoardBar/BoardBar'
import BoardContent from '../BoardContent/BoardContent'
import { mockData } from '~/apis/mockData'
import { useEffect, useState } from 'react'
import { createNewColumnAPI, fetchBoardDetailsAPI } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)
  useEffect(() => {
    const boardId = '66c59164aa1ee281b093d2a6'
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board)
    })
  }, [])

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })
    console.log('createdColumn: ', createdColumn)
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoardBar board={board}></BoardBar>
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
      ></BoardContent>
    </Container>
  )
}

export default Board
