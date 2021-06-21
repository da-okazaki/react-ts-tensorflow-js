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
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="h2">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ImageCard;

const useStyles = makeStyles(() =>
  createStyles({
    cardStyle: {
      width: "100%",
      height: "100%",
    },
    media: {
      height: "100px",
    },
    cardHeaderStyle: {},
    cardContentsStyle: {},
  })
);
