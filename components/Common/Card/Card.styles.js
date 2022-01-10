import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  cardWrapper: {
    backgroundImage: `url(
      "https://www.iconicpropertiesllc.com/app/themes/vivid/assets/img/sell-your-house.jpg"
    )`,
    backgroundPosition: '48% 62%',
    maxHeight: '400px',
  },
  cardContentWrapper: {
    background: `rgb(23, 33, 38,0.3)`,
    color: 'white',
    padding: '20px',
  },
  cardContent: {
    color: 'white',
  },
});
