import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStyles } from './Card.styles';
import Box from '@mui/material/Box';
import HomeButtons from '../HomeButtons/HomeButtons';

export default function CardComponentWithBackgroundImage({
  cardTitle,
  cardDescription,
  buttonTitle,
  buttonOnClick,
  route,
  imgPath,
}) {
  const { cardWrapper, cardContentWrapper, cardContent, cardDesc } = useStyles({
    imgPath,
  });
  console.log('test', cardTitle, imgPath);
  return (
    <Card className={cardWrapper}>
      <Box className={cardContentWrapper}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={cardContent}
          >
            {cardTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={cardDesc}
          >
            {cardDescription}
          </Typography>
          <CardActions>
            <HomeButtons route={route} onClick={buttonOnClick}>
              LEARN MORE
            </HomeButtons>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}
