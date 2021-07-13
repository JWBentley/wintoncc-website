import { withStyles } from '@material-ui/core/styles';
import logoImage from '../images/logo.png';

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
  },
  linkSection: {
    "background": 'rgba( 55, 55, 55, 0.3 )',
    "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
    "backdrop-filter": 'blur( 10px )',
    "-webkit-backdrop-filter": 'blur( 10px )',
    "border-radius": '25px',
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "display": 'flex',
    "justify-content": 'space-evenly',
    "flex-grow": '1',
    "width": 'auto',
    "height": "max-content",
    "padding": '0',
    "margin": '10px',
    "list-style-type": 'none'
  },
  linkItem: {
    "text-align": "center",
    "padding": '10px',
    "height": 'inherit',
    "border-radius": '25px',
    // "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "display": 'inline',
    "flex-basis": '0',
    "flex-grow": '1',
    "&:hover": {
      "backgroundColor": "rgba( 254, 0, 0, 0.3)",
   }
  },
  linkText: {
    "color": '#ffffff',
    "text-decoration": 'none',
    "font-weight": 'bold',
    "display": 'block',
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
      <NavBarLinks classes={classes} links={links.slice(0, links.length / 2)} />
      <a href="/">
        <img src={logoImage} className={classes.logo} alt="logo" />
      </a>
      <NavBarLinks classes={classes} links={links.slice(links.length / 2)} />
    </div>
  );
}

const NavBarLinks = (props) => {
  const { classes, links } = props;

  return (
    <ul className={classes.linkSection}>
      { links.map(link =>
        <li key={`nav-${link.text}`} className={classes.linkItem}>
          <a href={link.path} className={classes.linkText}>{link.text}</a>
        </li>)
      }
    </ul>
  );
}

export default withStyles(styles)(NavBar);
