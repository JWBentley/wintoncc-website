import { withStyles } from '@material-ui/core/styles';
import Link from './Link';

const styles = {
    linkSection: {
      "background": 'rgba( 55, 55, 55, 0.3 )',
      "box-shadow": 'inset 0 8px 32px 0 rgba( 155, 155, 155, 0.37 )',
      "backdrop-filter": 'blur( 10px )',
      "-webkit-backdrop-filter": 'blur( 10px )',
      "border-radius": '25px',
      "border": '1px solid rgba( 55, 55, 55, 0.2 )',
      "display": 'flex',
      "justify-content": 'space-evenly',
      "flex-wrap": 'no-wrap',
      "width": '800px',
      "padding": '0',
      "margin": '10px',
      "list-style-type": 'none',
    }
  }
  

const LinkSection = (props) => {
    const { classes, links } = props;
  
    return (
      <ul className={classes.linkSection}>
        <Link link={links[0]} position="left" key={`nav-${links[0].text}`} />
        { links.slice(1, links.length - 1).map(link => <Link link={link} key={`nav-${link.text}`} />) }
        <Link link={links[links.length - 1]} position="right" key={`nav-${links[links.length - 1].text}`} />
      </ul>
    );
  }
  
export default withStyles(styles)(LinkSection);