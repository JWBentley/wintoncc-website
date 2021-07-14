import { withStyles } from '@material-ui/core/styles';
import logoImage from '../../images/logo.png';
import LinkSection from './LinkSection';

const styles = {
  root: {
    "display": 'flex',
    "align-items": 'center',
    "width": '100%',
    "height": 'auto'
  },
  logo: {
    "width": 'auto',
    "height": "100px",
    "margin": "10px",
    "transition": "all .3s ease-in-out",
    "&:hover": {
      "transform": "scale(1.1)",
   }
  }
}

const links = [
  { text: 'About', path: '/about' },
  { text: 'News', path: '/news' },
  { text: 'Members', path: '/members' },
  { text: 'Shop', path: '/shop' },
  { text: 'Contact', path: '/contact' },
  { text: 'Teams', path: '/teams' },
  { text: 'Matches', path: '/matches' },
  { text: 'Tables', path: '/tables' },
  { text: 'Statistics', path: '/statistics' },
  { text: 'Bar List', path: '/bar' }
];

const NavBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinkSection links={links.slice(0, links.length / 2)} />
      <a href="/">
        <img src={logoImage} className={classes.logo} alt="logo" />
      </a>
      <LinkSection links={links.slice(links.length / 2)} />
    </div>
  );
}

export default withStyles(styles)(NavBar);