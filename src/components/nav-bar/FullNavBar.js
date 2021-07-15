import { withStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';
import logoImage from '../../images/logo.png';
import LinkSection from './LinkSection';

const styles = {
    root: {
    "display": 'flex',
    "justify-content": 'center',
    "align-items": 'center',
    "width": '100%',
    "height": 'auto'
},
  logo: {
    "width": 'auto',
    "height": "100px",
    "margin": "10px",
    "align-self": 'center',
    "transition": "all .3s ease-in-out",
    "&:hover": {
      "transform": "scale(1.2)",
   }
  }
}

const FullNavBar = (props) => {
    const { classes, links } = props;

    return (
        <Grow in={true} timeout={2500} >
        <div className={classes.root}>
            <LinkSection links={links.slice(0, links.length / 2)} />
            <a href="/">
                <img src={logoImage} className={classes.logo} alt="logo" />
            </a>
            <LinkSection links={links.slice(links.length / 2)} />
        </div>
        </Grow>
    );
}

export default withStyles(styles)(FullNavBar);