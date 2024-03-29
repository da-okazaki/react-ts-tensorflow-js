import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { AppBarProps } from "../../types/types";

const TopBar: FC<AppBarProps> = ({ title }: AppBarProps) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar variant="dense">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          className={classes.logoStyle}
        />
        <Typography variant="subtitle1">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;

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
    logoStyle: {
      width: "24px",
      marginRight: theme.spacing(2),
    },
  })
);
