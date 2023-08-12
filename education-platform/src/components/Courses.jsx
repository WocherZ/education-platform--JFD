import React, { useState, useEffect } from 'react'
import { 
    Button, 
    CardActionArea, 
    CardActions,
    Typography,
    CardMedia,
    CardContent,
    Card,
} from '@mui/material'

function Courses({course}) {


  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={course.picture}
                    alt="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {course.description}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                ПОДРОБНЕЕ
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Courses