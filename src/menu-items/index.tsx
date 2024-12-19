// project import
import other from './contacts';
import pages from './dashboard';
import homePage from './home-page';
// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [homePage, pages, other]
};

export default menuItems;
