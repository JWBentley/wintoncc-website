import { withStyles } from '@material-ui/core/styles'
import backgroundImage from '../../images/ground.jpg'

const styles = {
  root: {
    "height": '100%',
    "width": '100%',
  },
  background: {
    "display": 'flex',
    "object-fit": 'cover',
    "justify-content": 'center',
    "object-position": 'center',
    "width": '100%',
    "height": '100%',
    "position": 'fixed',
    "top": 0,
    "bottom": 0,
    "z-index": -1
  }
}

const HomePage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img src={backgroundImage} className={classes.background} alt="ground" />
      <h1>Home Page</h1>
    </div>
  );
}

export default withStyles(styles)(HomePage);
