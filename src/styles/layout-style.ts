import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => {
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
    },

    wrapperStyle: {
      height: "100%",
      width: "100%",
    },

    appBarStyle: {
      height: 48,
      display: "block"
    }
  })
})

