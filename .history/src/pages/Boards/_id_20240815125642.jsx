import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '../BoardBar/BoardBar'
import BoardContent from '../BoardContent/BoardContent'
import { mockData } from '~/apis/mockData'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {
  // const [board, setBoard] = useState(null)
  // useEffect(() => {
  //   const boardId = '66ae232c72d66349e03ae89d'
  //   fetchBoardDetailsAPI(boardId).then((board) => {
  //     setBoard(board)
  //   })
  // }, [])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoardBar board={mockData?.board}></BoardBar>
      <BoardContent board={mockData?.board}></BoardContent>
    </Container>
  )
}

export default Board
