import { makeStyles, createStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import { HomeScreen, ImageClassificationScreen } from './components/pages';

function App() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.app}>
      <Router>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/image_classification' component={ImageClassificationScreen} />
      </Router>
    </div>
  );
}

export default App;

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      width: '100vw',
      height: 'calc(100vh - 48px)',
      margin: '48px 0 0 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
    },
  })
);
