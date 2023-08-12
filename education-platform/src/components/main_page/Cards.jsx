import './card.css';
import { Grid, CardContent, Avatar, Typography } from '@mui/material';
import { DivCourseSection, ContainerCardGrid, StyledCard, StyledCardMedia, TypographyUserName, DivCourseUser, DivCourseRating, ImgRaitingStar } from '.././../styles.js';


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
  
    return (
      <DivCourseSection>
        <ContainerCardGrid>
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <Grid item xs={4} key={card.id}>
                <StyledCard>
                  <StyledCardMedia image={card.image} title="card_title" />
                  <CardContent className={card.cardContent}>
                    <DivCourseUser>
                      <Avatar alt="Diallo Liam" src={card.avatar} />
                      <TypographyUserName>{card.userName}</TypographyUserName>
                    </DivCourseUser>
                    <Typography>{card.courseTitle}</Typography>
                    <DivCourseRating>
                      <div>{card.rating}/5.0</div>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <ImgRaitingStar
                          key={index}
                          src={star}
                          alt={`star-${index}`}
                        />
                      ))}
                    </DivCourseRating>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </ContainerCardGrid>
      </DivCourseSection>
    );
  };
  
  export default Cards;