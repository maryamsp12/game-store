import { Box } from '@mui/material'
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
    <Box sx={{ height: '100%', borderRadius: 2, overflow: 'hidden' }}>
      {children}
    </Box>
  )
}

export default GameCardContainer