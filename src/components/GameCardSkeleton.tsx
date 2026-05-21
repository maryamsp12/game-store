import { Card, CardContent, Skeleton } from '@mui/material'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton