import { styled } from '@mui/material/styles';
import { Card, Container, CardMedia, Typography } from '@mui/material';


const DivCourseSection = styled("div")(({ theme }) => ({
    paddingTop: "90px",
    paddingBottom: "113px",
  }));
  
  const ContainerCardGrid = styled(Container)(({ theme }) => ({
    paddingTop: "0",
  }));
  
  const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "0",
    height: "516px",
  }));
  
  const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    minWidth: "456px",
    minHeight: "283px",
    flexShrink: "0",
  }));
  
  const DivCourseUser = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  }));
  
  const TypographyUserName = styled(Typography)(({ theme }) => ({
    paddingLeft: "20px",
    paddingBottom: "5px",
    color: "#96989B",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  }));
  
  const DivCourseRating = styled("div")(({ theme }) => ({
    display: "flex",
    paddingTop: "33px",
  }));
  
  const ImgRaitingStar = styled("img")(({ theme }) => ({
    paddingLeft: "5px",
  }));

  export { DivCourseSection, ContainerCardGrid, StyledCard, StyledCardMedia, DivCourseUser, TypographyUserName, DivCourseRating, ImgRaitingStar  };