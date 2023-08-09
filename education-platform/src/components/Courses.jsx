import React from 'react'
import { 
    Grid,  
    Button, 
    CardActionArea, 
    CardActions,
    Typography,
    CardMedia,
    CardContent,
    Card,
} from '@mui/material'



function Courses() {
  return (
    <div>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        ПОДРОБНЕЕ
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        ПОДРОБНЕЕ
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        ПОДРОБНЕЕ
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        ПОДРОБНЕЕ
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        ПОДРОБНЕЕ
                        </Button>
                    </CardActions>
                </Card>
            </Grid> 
            
        </Grid>
    </div>
  )
}

export default Courses