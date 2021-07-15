import { withStyles } from '@material-ui/core/styles';
import { Grow, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import logoImage from '../../images/logo.png';
import { useState } from 'react';

const styles = {
  root: {
    "display": 'flex',
    "justify-content": 'space-between',
    "align-items": 'center',
    "width": '100%',
    "height": 'auto'
  },
  logo: {
    "width": 'auto',
    "height": '80px',
    "margin": '10px',
    "align-self": 'center',
    "flex-shrink": '1',
    "transition": "all .3s ease-in-out",
    "&:hover": {
      "transform": "scale(1.2)",
    }
  },
  menuButton: {
    "height": '60px',
    "width": '60px',
    "margin": '10px',
    "background": 'rgba( 55, 55, 55, 0.5 )',
    "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "backdrop-filter": 'blur( 10px )',
    "-webkit-backdrop-filter": 'blur( 10px )',
    "&:hover": {
      "backgroundColor": "rgba( 254, 0, 0, 0.4)",
    }
  },
  fakeMenuButton: {
    "height": '60px',
    "width": '60px',
    "margin": '10px',
  },
  menuIcon: {
    "height": '100%',
    "width": '100%',
    "color": '#ffffff'
  },
  menuDrawer: {
    "background": 'rgba( 55, 55, 55, 0.5 )',
    "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "backdrop-filter": 'blur( 10px )',
    "-webkit-backdrop-filter": 'blur( 10px )',
    "justify-content": 'center'
  },
  menuList: {
    "width": '200px',
    "height": '100%',
    "padding": '0'
  },
  link: {
    "border": '1px solid rgba( 55, 55, 55, 0.2 )',
    "&:hover": {
      "backgroundColor": "rgba( 254, 0, 0, 0.4)",
    }
  },
  linkText: {
    "text-align": 'right',
    "color": "#ffffff"
  }
}

const CompactNavBar = (props) => {
  const { classes, links } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMenuOpen(open);
  };

  return (
    <>
      <Grow in={true} timeout={2500} >
        <div className={classes.root}>
          <span className={classes.fakeMenuButton} />
          <a href="/">
            <img
              src={logoImage}
              className={classes.logo}
              alt="logo"
            />
          </a>
          {
            menuOpen
              ? <span className={classes.fakeMenuButton} />
              : <IconButton onClick={toggleMenu(true)} className={classes.menuButton} aria-label="open navigation menu">
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
          }
        </div>
      </Grow>
      <SwipeableDrawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
        classes={{ paper: classes.menuDrawer }}
        BackdropProps={{ invisible: true }}
      >
        <div onClick={toggleMenu(false)} onKeyDown={toggleMenu(false)}>
          <List className={classes.menuList} >
            {links.map(link => <ListItem className={classes.link} button component="a" href={link.path} key={`nav-${link.text}`}><ListItemText className={classes.linkText} primary={link.text} /></ListItem>)}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default withStyles(styles)(CompactNavBar);