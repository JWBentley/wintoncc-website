import { withStyles } from '@material-ui/core/styles'
import { Background } from '../../components';
import backgroundImage from '../../images/ground.jpg'

const styles = {
  root: {
    "height": '100%',
    "width": '100%',
    "display": 'flex',
    "flex-direction": 'column',
    "align-items": 'center',
    "justify-content": 'center'
  },
  box: {
    "background": 'rgba( 55, 55, 55, 0.3 )',
    "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
    "backdrop-filter": 'blur( 10px )',
    "-webkit-backdrop-filter": 'blur( 10px )',
    "border-radius": '25px',
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "display": 'flex',
    "flex-direction": 'column',
    "justify-content": 'center',
    "align-items": 'center',
    "width": 'max-content',
    "padding": '10px',
    "margin": '10px'
  },
  text: {
    "color": '#ffffff',
    "margin": '10px'
  }
}

const HomePage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Background src={backgroundImage} />
      
      <div className={classes.box}>
        <h2 className={classes.text}>Winton Cricket Club</h2>
        <p className={classes.text}><a href="https://goo.gl/maps/YtDqpaeirr78uzmC6">Alder Forest Avenue, Winton, Salford, M30 8JL</a></p>
      </div>
      

    </div>
  );
}

export default withStyles(styles)(HomePage);
