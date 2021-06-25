import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";

interface Props {
  image: string;
  title: string;
  label: string;
}
const ImageCard: FC<Props> = ({ image, title, label }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMediaStyle}
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContentsStyle}>
          <Typography gutterBottom variant="subtitle2" component="h2">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ImageCard;

const useStyles = makeStyles((theme) =>
  createStyles({
    cardStyle: {
      width: "100%",
      height: "100%",
    },
    cardMediaStyle: {
      [theme.breakpoints.down("xs")]: {
        height: "80px",
        objectFit: "cover",
      },
      [theme.breakpoints.up("sm")]: {
        height: "150px",
        objectFit: "cover",
      },
    },
    cardContentsStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
