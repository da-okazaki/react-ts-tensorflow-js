import { FC } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { TopBar, ImageCard } from "../uikits";
import { CardData } from "../../constants/card-data";
const HomeScreen: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <TopBar title="React for Tensorflow.js" />
      <Grid container>
        {CardData.map((item) => (
          <Grid item xs={6} className={classes.gridStyle}>
            <ImageCard
              key={item.id}
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
      width: "100vw",
      display: "block",
    },
    title: {
      flexGrow: 1,
      display: "flex",
      textAlign: "left",
      marginLeft: theme.spacing(2),
    },
    gridStyle: {
      padding: "8px",
    },
  })
);
