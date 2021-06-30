import { FC } from 'react'
import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core'
import { TopBar } from '../uikits'
// import { CardData } from '../../constants/card-data'
const ImageClassificationScreen: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopBar title='Image Classification' />
    </div>
  )
}
export default ImageClassificationScreen

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '8px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '65%',
      },
    },

    contentsTitle: {
      height: '100px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      left: '20px',
    },

    gridContainerStyle: {
      width: '100%',
    },

    gridItemStyle: {
      padding: '8px',
      width: '100%',
    },
  })
)
