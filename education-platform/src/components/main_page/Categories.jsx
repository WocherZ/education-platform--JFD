import './categories.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import Cards from './Cards';

const Categories = () => {

    return (
       <>
            <CssBaseline />
            <div className="categories">
                <Container className='categories_container'>
                    <Typography variant='h6' textAlign='start' className='categories_header'>Popular Categories</Typography>
                    <Typography variant='h3' textAlign='start' className='categories_text'>Explore the most popular categories</Typography>
                    <div className='links_to'>
                        <ul className='links_to__group'>
                            <li className='left_link'><a></a></li>
                            <li className='right_link'><a></a></li>
                        </ul>
                    </div>

                    <div className='courses_container'>
                        <ul className='courses_list'>
                            <li><a href='#' className='courses'>Programming</a></li>
                            <li><a href='#' className='courses'>Design</a></li>
                            <li><a href='#' className='courses'>Bussiness</a></li>
                            <li><a href='#' className='courses'>Lifestyle</a></li>
                            <li><a href='#' className='courses'>Health & Fitness</a></li>
                            <li><a href='#' className='courses'>Marketing</a></li>
                            <li><a href='#' className='courses'>Music</a></li>
                            <li><a href='#' className='courses'>Finance and Accounting</a></li>
                        </ul>
                    </div>
                    <Cards></Cards>
                </Container>
            </div>
       </>
       );
}

export default Categories;