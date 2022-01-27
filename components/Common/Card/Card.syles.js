import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardWrapper: {
    // background: 'rgba(0,0,0,0.1)',
    backgroundImage: ({backgroundImagePath})=> `url(${backgroundImagePath})`,
    backgroundPosition: "48% 62%",
    minHeight: "200px",
  },
  cardContentWrapper: {
    background: `rgb(23, 33, 38,0.3)`,
    color: "white",
    padding: "20px",
  },
  cardContent: {
    color: "white",
  },
});
