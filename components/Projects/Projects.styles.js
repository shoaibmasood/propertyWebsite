import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  testimonialContainer: {
    display: "flex",
    marginTop: "3.8rem",
    marginBottom: "3.8rem",
    "& .slick-slider > svg": {
      color: "#ff6161",
    },
  },
  testimonialSlider: {
    "& .slick-slider": {
      width: "90%",
    },
    // maxWidth: '48rem',
  },
  testimonialIcon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3.3rem",
    "& svg": {
      fontSize: "5.18rem",
      color: "#ff6161",
    },
  },
  testimonialContent: {
    marginBottom: "1rem",
  },

  imgWrapper: {
    display: "flex",
    justifyContent: "space-between",
    "& img": {
      "&:hover": {
        transform: "scale(1.25)",
        transition: "all 1.1s ease",

        border: "solid black",
      },
    },
  },
});
