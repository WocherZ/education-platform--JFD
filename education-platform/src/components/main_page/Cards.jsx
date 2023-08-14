
import { Card, Grid, Container, CardMedia, CardContent, Avatar, Typography } from '@mui/material';


import star from '../../images/main/Star 1.svg';

const cardData = [
    {
        id: 1,
        image: require('../../images/main/code_image1.png'),
        avatar: require('../../images/main/code_item1.svg').default,
        userName: 'Диалло Лим',
        courseTitle: 'Веб дизайн и разработка. Курс 2023',
        rating: 4.8,
    },
    {
        id: 2,
        image: require('../../images/main/robot_image2.png'),
        avatar: require('../../images/main/code_item2.svg').default,
        userName: 'Юлия Николаева',
        courseTitle: 'Машинное обучение, наука о данных и глубокое обучение',
        rating: 4.6,
    },
    {
        id: 3,
        image: require('../../images/main/laptop_image3.png'),
        avatar: require('../../images/main/code_item3.svg').default,
        userName: 'Сильвестр Андреев',
        courseTitle: 'Python, наука о данных и машинное обучение: интенсивный курс.',
        rating: 4.6,
    },
    {
        id: 4,
        image: require('../../images/main/cartoons_image4.png'),
        avatar: require('../../images/main/code_item4.svg').default,
        userName: 'Роксанна Андрю',
        courseTitle: 'Дизайн пользовательского интерфейса (UI/UX), дизайн продуктов.',
        rating: 4.9,
    },
    {
        id: 5,
        image: require('../../images/main/girl_image5.png'),
        avatar: require('../../images/main/code_item5.svg').default,
        userName: 'Лесли Трулли',
        courseTitle: 'Adobe Photoshop, Adobe Illustrator',
        rating: 4.5,
    },
    {
        id: 6,
        image: require('../../images/main/games_image6.png'),
        avatar: require('../../images/main/code_item6.svg').default,
        userName: 'Давин Арутюнян',
        courseTitle: 'Самое полное руководство по разработке игр с использованием Unity 2023.',
        rating: 4.6,
    }
];

const Cards = () => {
  return (
    <Container>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ flexGrow: 1, minWidth: 270 }}>
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="194" image={card.image} title="card_title" />
              <CardContent sx={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={card.userName} src={card.avatar} />
                  <Typography>{card.userName}</Typography>
                </div>
                <Typography>{card.courseTitle}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>{card.rating}/5.0</div>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <img key={index} src={star} alt={`star-${index}`} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
