import { FC } from "react";
import { Grid, Typography, makeStyles, createStyles } from "@material-ui/core";
import { TopBar, ImageCard } from "../uikits";
import { CardData } from "../../constants/card-data";
const HomeScreen: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar title="Tensorflow" />
      <div className={classes.contentsTitle}>
        <Typography variant="h5">モデル</Typography>
        <Typography variant="subtitle2">
          事前トレーニング済みの TensorFlow.js モデル
        </Typography>
      </div>
      <Grid container className={classes.gridContainerStyle}>
        {CardData.map((item) => (
          <Grid
            item
            xs={6}
            sm={4}
            className={classes.gridItemStyle}
            key={item.id}>
            <ImageCard
              image={item.image}
              title={item.title}
              label={item.label}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default HomeScreen;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "8px",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "65%",
      },
    },

    contentsTitle: {
      height: "100px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: "column",
      marginLeft: theme.spacing(2),
      left: "20px",
    },

    gridContainerStyle: {
      width: "100%",
    },

    gridItemStyle: {
      padding: "8px",
      width: "100%",
    },
  })
);
