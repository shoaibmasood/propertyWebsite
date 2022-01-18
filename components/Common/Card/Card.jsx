import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
}) {
  const { cardWrapper, cardContentWrapper, cardContent } = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={cardWrapper}>
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
            className={cardContent}
          >
            {cardDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <HomeButtons route={route} onClick={buttonOnClick}>
            LEARN MORE
          </HomeButtons>
        </CardActions>
      </Box>
    </Card>
  );
}
