import './card.css';
import { Card, Grid, Container, CardMedia, CardContent, Avatar, Typography } from '@mui/material';
import useStyles from '../../styles';

import star from '../../images/main/Star 1.svg';

const cardData = [
    {
        id: 1,
        image: require('../../images/main/code_image1.png'),
        avatar: require('../../images/main/code_item1.svg').default,
        userName: 'Diallo Liam',
        courseTitle: 'Web design and development Crash course 2022',
        rating: 4.8,
    },
    {
        id: 2,
        image: require('../../images/main/robot_image2.png'),
        avatar: require('../../images/main/code_item2.svg').default,
        userName: 'Amanda Cerny',
        courseTitle: 'Machine learning, Data science and Deep Learning',
        rating: 4.6,
    },
    {
        id: 3,
        image: require('../../images/main/laptop_image3.png'),
        avatar: require('../../images/main/code_item3.svg').default,
        userName: 'Sylvester Drolly',
        courseTitle: 'Python, Data Science and machine learning boothcamp',
        rating: 4.6,
    },
    {
        id: 4,
        image: require('../../images/main/cartoons_image4.png'),
        avatar: require('../../images/main/code_item4.svg').default,
        userName: 'Roxanne Andrews',
        courseTitle: 'UI/UX Design, Product Design',
        rating: 4.9,
    },
    {
        id: 5,
        image: require('../../images/main/girl_image5.png'),
        avatar: require('../../images/main/code_item5.svg').default,
        userName: 'Leslie Truly',
        courseTitle: 'Adobe Photoshop, Adobe Illustrator',
        rating: 4.5,
    },
    {
        id: 6,
        image: require('../../images/main/games_image6.png'),
        avatar: require('../../images/main/code_item6.svg').default,
        userName: 'David Perry',
        courseTitle: 'The ultimate guide to Game development with Unity 2022',
        rating: 4.6,
    }
];

const Cards = () => {
    const classes = useStyles();

    return (
        <div className={classes.courseSection}>
            <Container className={classes.cardGrid}>
                <Grid container spacing={3}>
                    {cardData.map((card) => (
                        <Grid item xs={4} key={card.id}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={card.image} title='card_title' />
                                <CardContent className={classes.cardContent}>
                                    <div className={classes.courseUser}>
                                        <Avatar alt='Diallo Liam' src={card.avatar} />
                                        <Typography className={classes.userName}>{card.userName}</Typography>
                                    </div>
                                    <Typography>{card.courseTitle}</Typography>
                                    <div className={classes.courseRating}>
                                        <div>{card.rating}/5.0</div>
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <img key={index} className={classes.raitingStar} src={star} alt={`star-${index}`} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Cards;
