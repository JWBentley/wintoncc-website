import { withStyles } from '@material-ui/core/styles';

const styles = {
    linkItem: {
      "text-align": "center",
      "border-radius": (props) =>
        props.position === 'left' 
          ? '25px 0 0 25px' 
          : props.position === 'right' 
            ? '0 25px 25px 0' 
            : '0',
      "border": '1px solid rgba( 55, 55, 55, 0.2 )',
      "display": 'inline',
      "flex-basis": '0',
      "flex-grow": '1',
      "&:hover": {
        "backgroundColor": "rgba( 254, 0, 0, 0.4)",
     }
    },
    linkText: {
      "color": '#ffffff',
      "text-decoration": 'none',
      "font-weight": 'bold',
      "display": 'block',
      "padding": '10px',
      "white-space": 'nowrap'
    }
}

const NavBarLink = (props) => {
    const { classes, link, position } = props;
  
    return (
      <li className={classes.linkItem} position={position}>
        <a href={link.path} className={classes.linkText}>{link.text}</a>
      </li>
    );
}

export default withStyles(styles)(NavBarLink);