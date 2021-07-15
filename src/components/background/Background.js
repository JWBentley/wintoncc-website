import { withStyles } from '@material-ui/core/styles'

const styles = {
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

const Background = (props) => {
  const { classes, src } = props;

    return (
        <img src={src} className={classes.background} alt="background" />
    );
}

export default withStyles(styles)(Background);
