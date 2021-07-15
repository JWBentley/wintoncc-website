import { useMediaQuery } from '@material-ui/core';
import FullNavBar from './FullNavBar';
import CompactNavBar from './CompactNavBar';

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

const NavBar = () => {
  if (useMediaQuery('(min-width:1280px)')) {
    return <FullNavBar links={links} />;
  }
  else {
    return <CompactNavBar links={links} />;
  }
}

export default NavBar;