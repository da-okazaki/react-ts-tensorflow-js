import { makeStyles, createStyles } from "@material-ui/core";
import HomeScreen from "./components/pages/home-screen";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <HomeScreen />
    </div>
  );
}

export default App;

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      width: "100vw",
      height: "calc(100vh - 48px)",
      margin: "48px 0 0 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
    },
  })
);
